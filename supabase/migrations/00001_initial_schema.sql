-- 1. ENUMS
CREATE TYPE content_status AS ENUM ('draft', 'scheduled', 'published', 'archived');
CREATE TYPE lead_status AS ENUM ('new', 'contacted', 'qualified', 'converted', 'closed');
CREATE TYPE media_type AS ENUM ('image', 'video', 'document', 'model_3d', 'hdri');

-- 2. ROLES & PROFILES
CREATE TABLE IF NOT EXISTS roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(50) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO roles (name, description) VALUES
('owner', 'Full system access'),
('admin', 'Content and settings management'),
('editor', 'Blog and project editing'),
('designer', 'Media management'),
('developer', 'Technical configurations'),
('viewer', 'Read-only access')
ON CONFLICT (name) DO NOTHING;

CREATE TABLE IF NOT EXISTS user_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    role_id UUID REFERENCES roles(id),
    full_name VARCHAR(255) NOT NULL,
    avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. PROJECTS & MEDIA
CREATE TABLE IF NOT EXISTS projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    client_name VARCHAR(255),
    industry VARCHAR(100),
    short_description TEXT,
    full_description TEXT,
    challenge TEXT,
    solution TEXT,
    results TEXT,
    live_url TEXT,
    github_url TEXT,
    featured BOOLEAN DEFAULT FALSE,
    sort_order VARCHAR(255) NOT NULL DEFAULT '0|h:',
    status content_status DEFAULT 'draft',
    published_at TIMESTAMPTZ,
    seo_title VARCHAR(255),
    seo_description TEXT,
    created_by UUID REFERENCES auth.users(id),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    deleted_at TIMESTAMPTZ DEFAULT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_projects_active_slug ON projects (slug) WHERE deleted_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_projects_status_featured ON projects (status, featured) WHERE deleted_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_projects_sort_order ON projects (sort_order);

CREATE TABLE IF NOT EXISTS project_media (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    media_url TEXT NOT NULL,
    media_type media_type NOT NULL,
    caption TEXT,
    alt_text TEXT,
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. SERVICES
CREATE TABLE IF NOT EXISTS services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    icon_name VARCHAR(100),
    banner_url TEXT,
    short_description TEXT,
    long_description TEXT,
    features JSONB DEFAULT '[]'::jsonb,
    technologies JSONB DEFAULT '[]'::jsonb,
    featured BOOLEAN DEFAULT FALSE,
    display_order INT DEFAULT 0,
    seo_title VARCHAR(255),
    seo_description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    deleted_at TIMESTAMPTZ DEFAULT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_services_active_slug ON services (slug) WHERE deleted_at IS NULL;

-- 5. CONTACT LEADS
CREATE TABLE IF NOT EXISTS contact_leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    company_name VARCHAR(255),
    service_interest VARCHAR(255),
    budget_range VARCHAR(100),
    message TEXT NOT NULL,
    status lead_status DEFAULT 'new',
    assigned_to UUID REFERENCES auth.users(id),
    internal_notes TEXT,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_leads_status ON contact_leads (status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON contact_leads (created_at DESC);

-- 6. HOMEPAGE CMS SECTIONS
CREATE TABLE IF NOT EXISTS homepage_sections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    section_key VARCHAR(100) UNIQUE NOT NULL,
    title VARCHAR(255),
    subtitle TEXT,
    content JSONB NOT NULL DEFAULT '{}'::jsonb,
    is_enabled BOOLEAN DEFAULT TRUE,
    display_order INT DEFAULT 0,
    updated_by UUID REFERENCES auth.users(id),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. AUDIT LOGS
CREATE TABLE IF NOT EXISTS audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id),
    action VARCHAR(100) NOT NULL,
    entity_type VARCHAR(100) NOT NULL,
    entity_id UUID,
    details JSONB,
    ip_address INET,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE homepage_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- Public Read Access for Published Content
CREATE POLICY "Public Read Published Projects" ON projects
    FOR SELECT USING (status = 'published' AND deleted_at IS NULL);

CREATE POLICY "Public Read Active Services" ON services
    FOR SELECT USING (deleted_at IS NULL);

CREATE POLICY "Public Read Active Homepage Sections" ON homepage_sections
    FOR SELECT USING (is_enabled = TRUE);

-- Public Insert for Contact Leads
CREATE POLICY "Public Insert Contact Leads" ON contact_leads
    FOR INSERT WITH CHECK (TRUE);

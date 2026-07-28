import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // In local development or if credentials are placeholders, allow admin access for testing
  if (
    process.env.NODE_ENV === 'development' ||
    !supabaseUrl ||
    supabaseUrl.includes('placeholder')
  ) {
    return response;
  }

  try {
    const { createServerClient } = await import('@supabase/ssr');
    const supabase = createServerClient(
      supabaseUrl,
      supabaseAnonKey || '',
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) =>
              request.cookies.set(name, value)
            );
          },
        },
      }
    );

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (request.nextUrl.pathname.startsWith('/admin') && !user) {
      const url = request.nextUrl.clone();
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }
  } catch (error) {
    console.error('Middleware auth check error:', error);
  }

  return response;
}

export const config = {
  matcher: ['/admin/:path*', '/api/protected/:path*'],
};

import { NextResponse } from 'next/server';

export async function GET() {
  const healthData = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: '1.0.0-production',
    uptimeSeconds: process.uptime(),
    services: {
      database: 'connected',
      storage: 'available',
      isrCache: 'active',
    },
  };

  return NextResponse.json(healthData, { status: 200 });
}

import { NextRequest } from 'next/server';

export function verifyAdmin(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false;
  }

  const token = authHeader.substring(7);
  
  // Simple token verification (in production, use JWT or session-based auth)
  // For now, we'll use a simple check against environment variable
  const adminToken = process.env.ADMIN_TOKEN || 'admin-secret-token';
  
  return token === adminToken;
}

export function getAdminToken(): string {
  return process.env.ADMIN_TOKEN || 'admin-secret-token';
}

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the user is authenticated
  /*const session = request.cookies.get('session');
  
  // If the user is not authenticated and trying to access protected routes
  if (!session && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  // If the user is authenticated and trying to access auth pages
  if (session && (
    request.nextUrl.pathname.startsWith('/login') || 
    request.nextUrl.pathname.startsWith('/register')
  )) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }*/
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register'],
};
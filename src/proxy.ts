import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export default function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/luxe', request.url))
  }
}
 
export const config = {
  matcher: '/',
}

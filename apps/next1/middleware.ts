import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export default async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.VIBRA_NEXTAUTH_SECRET
  })

  const { pathname } = req.nextUrl

  if (token?.accessToken && pathname === '/login') {
    req.nextUrl.pathname = '/dashboard'
    return NextResponse.redirect(req.nextUrl)
  }

  if (!token?.accessToken && pathname !== '/login') {
    req.nextUrl.pathname = '/login'
    return NextResponse.redirect(req.nextUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|api/auth).*)(.+)', '/']
}

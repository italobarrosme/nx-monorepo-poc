import NextAuth from 'next-auth/next'
import { authOptions } from '@nx-monorepo-poc/shared/nextauth'

export default NextAuth(authOptions)

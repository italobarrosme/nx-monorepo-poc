import { decodeJWT } from '@nx-monorepo-poc/shared/utils'
import { setCookie } from 'nookies'
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

import { tokens } from '../../../constants/tokens'

export default async function setAccessToken(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session: any = await getSession({ req })
  if (session?.accessToken) {
    const decoded: any = decodeJWT(session?.accessToken)

    const authData = {
      family_name: decoded.family_name,
      email: decoded.email,
      preferred_username: decoded.preferred_username,
      impersonator: decoded.impersonator
    }

    setCookie({ res }, tokens['authData'], JSON.stringify(authData), {
      path: '/'
    })
  }

  return res.redirect(`/dashboard`)
}

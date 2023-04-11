import { tokens } from '../../../constants/tokens'
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

export default async function logout(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const session: any = await getSession({ req })
  const clientURL = process.env.KEYCLOAK_ISSUER
  const clientId = process.env.KEYCLOAK_CLIENT_ID
  const redirectUrl = `${process.env.BASE_AUTH_URL}/callback`

  let path = `${clientURL}/protocol/openid-connect/logout?post_logout_redirect_uri=${encodeURIComponent(
    redirectUrl
  )}`

  if (session?.idToken) {
    path = path + `&id_token_hint=${session.idToken}`
  } else {
    path = path + `&client_id=${clientId}`
  }

  res.setHeader('Set-Cookie', [`${tokens.authData}=deleted; Path=/; Max-Age=0`])

  res.status(200).json({ path })
}

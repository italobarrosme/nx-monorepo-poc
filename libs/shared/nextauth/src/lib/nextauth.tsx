/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import KeycloakProvider from 'next-auth/providers/keycloak'
import type { JWT } from 'next-auth/jwt'

/**
 * @param  {JWT} token
 */

const refreshAccessToken = async (token: JWT) => {
  try {
    const details = {
      client_id: process.env.KEYCLOAK_CLIENT_ID,
      client_secret: process.env.KEYCLOAK_CLIENT_SECRET,
      grant_type: ['refresh_token'],
      refresh_token: token.refreshToken
    }
    const formBody: string[] = []
    Object.entries(details).forEach(([key, value]: [string, any]) => {
      const encodedKey = encodeURIComponent(key)
      const encodedValue = encodeURIComponent(value)
      formBody.push(encodedKey + '=' + encodedValue)
    })
    const formData = formBody.join('&')
    const url = `${process.env.KEYCLOAK_ISSUER}/protocol/openid-connect/token`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: formData
    })
    const refreshedTokens = await response.json()
    if (!response.ok) throw refreshedTokens
    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpired: Date.now() + (refreshedTokens.expires_in - 15) * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
      refreshTokenExpired: Date.now() + (refreshedTokens.expires_in - 15) * 1000
    }
  } catch (error) {
    return {
      ...token,
      error: 'RefreshAccessTokenError'
    }
  }
}

export const authOptions = {
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID!,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET!,
      issuer: process.env.KEYCLOAK_ISSUER
    })
  ],
  secret: process.env.VIBRA_NEXTAUTH_SECRET,

  callbacks: {
    /**
     * @param  {object} account  Provider account
     */

    async jwt({ token, account }: any) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
        token.idToken = account.id_token
        token.refreshToken = account.refresh_token
        token.accessTokenExpired = Date.now() + (account.expires_in - 15) * 1000 // 15 seconds before expiration
        token.refreshTokenExpired =
          Date.now() + (account.refresh_expires_in - 15) * 1000 // 15 seconds before expiration
      }
      // Return previous token if the access token has not expired yet
      if (Date.now() < token.accessTokenExpired) return token

      // Access token has expired, try to update it
      return refreshAccessToken(token)
    },
    async session({ session, token }: any) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      session.idToken = token.idToken
      session.error = token.error
      return session
    },
    async redirect({ baseUrl }: any) {
      return `${baseUrl}/api/auth/callback`
    }
  }
}

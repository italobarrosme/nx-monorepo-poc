import { fetchAPI } from '@nx-monorepo-poc/shared/http-tool-kit'

export const logout = async () => {
  const response = await fetchAPI('/api/auth/logout', {
    method: 'GET'
  })

  return response.json()
}

import { fetchAPI } from '@nx-monorepo-poc/shared/http-tool-kit'

export type ResponseUser = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}[]

export const getUsers = async (): Promise<ResponseUser> => {
  const response = await fetchAPI('/api/users/', {
    method: 'GET'
  })

  return response.json()
}

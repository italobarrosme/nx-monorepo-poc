import { fetchAPI } from '@nx-monorepo-poc/shared/http-tool-kit'

export type ResponseComments = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}[]

export const getComments = async (): Promise<ResponseComments> => {
  const response = await fetchAPI('/api/comments/', {
    method: 'GET'
  })

  console.log('response', response)

  return response.json()
}

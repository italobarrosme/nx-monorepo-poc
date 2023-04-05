import type { NextApiResponse } from 'next'
import { fetchAPI } from '@nx-monorepo-poc/shared/http-tool-kit'

export default async function handler(_, res: NextApiResponse) {
  const response = await fetchAPI(
    'https://jsonplaceholder.typicode.com/users',
    {
      method: 'GET'
    }
  )

  const data = await response.json()

  res.status(200).json(data)
}

type Options = {
  body?: any
  method?: string
  headers?: any
}

type fetchAPI = (url: string, options: Options) => Promise<Response>

export const fetchAPI: fetchAPI = async (url: string, options: Options) => {
  const { body, method, headers } = options
  const response = await fetch(url, {
    method: method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: body ? JSON.stringify(body) : undefined
  })
  return response
}

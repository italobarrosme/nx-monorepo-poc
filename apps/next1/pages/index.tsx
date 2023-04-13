import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

export function Index() {
  const sessionData = useSession()
  const { push } = useRouter()

  useEffect(() => {
    if (!sessionData) {
      push('/login')
    } else {
      push('/dashboard')
    }
  }, [sessionData, push])

  return null
}

export default Index

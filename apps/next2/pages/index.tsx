import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

export function Index() {
  const { data: session } = useSession()
  const { push } = useRouter()

  useEffect(() => {
    if (!session) {
      push('/login')
    } else {
      push('/dashboard')
    }
  }, [session, push])

  return null
}

export default Index

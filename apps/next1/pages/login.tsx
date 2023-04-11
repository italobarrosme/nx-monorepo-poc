import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Login = () => {
  const { data: session } = useSession()
  const { push } = useRouter()

  useEffect(() => {
    if (!session) {
      signIn('keycloak')
    } else {
      push('/dashboard')
    }
  }, [session, push])

  return null
}

export default Login

import { AppProps } from 'next/app'
import Head from 'next/head'
import './../styles.css'
import { SessionProvider } from 'next-auth/react'
import { useRouter } from 'next/router'

function CustomApp({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  const router = useRouter()

  const isDashboardRouter = ['/dashboard', '/login'].includes(router.pathname)

  if (!isDashboardRouter) {
    return (
      <>
        <Head>
          <title>Welcome to Next1!</title>
        </Head>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Welcome to Dashboard next1!</title>
      </Head>
      <SessionProvider session={session}>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </SessionProvider>
    </>
  )
}

export default CustomApp

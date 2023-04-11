import { AppProps } from 'next/app'
import Head from 'next/head'
import './../styles.css'
import { SessionProvider } from 'next-auth/react'

function CustomApp({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to next2!</title>
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

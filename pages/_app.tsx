import type { AppProps } from 'next/app'
import Head from 'next/head'

import { globalStyles, HttpsRedirect } from 'components'

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles()

  return (
    <>
      <Head>
        <title>DeScivo</title>
      </Head>
      <HttpsRedirect>
        <Component {...pageProps} />
      </HttpsRedirect>
    </>
  )
}

export default MyApp

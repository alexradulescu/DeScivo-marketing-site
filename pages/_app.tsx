import type { AppProps } from 'next/app'

import { globalStyles } from 'components'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles()

  return (
    <>
      <Head>
        <title>DeScivo</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

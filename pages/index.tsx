import type { NextPage } from 'next'

import { styled } from 'stitches.config'
import { Card, ParticlesBackground, NewsletterSubscribe } from 'components'

const Home: NextPage = () => {
  return (
    <Main>
      <ParticlesBackground />
      <NewsletterCard header={<Heading>Stay tuned for more</Heading>}>
        <Logo src={'/DeScivo_logo_full.png'} alt="DeScivo" />
        <NewsletterSubscribe />
      </NewsletterCard>
    </Main>
  )
}

export default Home

const Main = styled('main', {
  position: 'relative',
  height: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const NewsletterCard = styled(Card, {
  width: 580,
  maxWidth: '92%',
  position: 'relative'
})

const Heading = styled('h1', {
  fontSize: 32,
  fontWeight: 'normal'
})

const Logo = styled('img', {
  height: 54
})

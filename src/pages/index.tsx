import UnstyledLink from '@/components/atoms/UnstyledLink'
import Hero from '@/components/template/Hero'
import Layout from '@/components/template/Layout'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  const meta = {
    title: process.env.NEXT_PUBLIC_OWNER_NAME as string,
    template: 'Personal Blog',
    description: `I'm John Doe, a software engineer in one of the biggest tech industry in the world, I personally writing mostly about web development and tech careers.`
  }
  return (
    <Layout as='main' {...meta}>
      <Hero {...meta}>
        <p className='max-w-prose'>
          If you want to get in touch with me, please catch me on one of my social media, I&apos;m always open when
          I&apos;m out of my office.
        </p>

        <UnstyledLink href='/blog'>See Blog</UnstyledLink>
      </Hero>
    </Layout>
  )
}

export default Home

import UnstyledLink from '@/components/atoms/UnstyledLink'
import Hero from '@/components/template/Hero'
import Layout from '@/components/template/Layout'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  const meta = {
    title: process.env.NEXT_PUBLIC_OWNER_NAME as string,
    template: 'Personal Blog',
    description: `I'm John Doe, a software engineer in one of the biggest tech industry in the world, I personally writing mostly about web development and tech careers.`,
    openGraph: {
      images: [
        {
          url: 'https://og-image.vercel.app/**NEXT.js%20Starter%20Blog**%3Cbr%20%2F%3EStarter%20blog%20with%20MDX%2C%20Tailwind%20CSS%2C%20and%20TypeScript..png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-bw-logo.svg',
          alt: 'NEXT.js Starter Blog',
          width: 1200,
          height: 600
        }
      ]
    }
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

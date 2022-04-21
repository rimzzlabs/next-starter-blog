import UnderlineLink from '@/components/mollecules/UnderlineLink'
import Layout from '@/components/template/Layout'

import clsx from 'clsx'
import type { NextPage } from 'next'

const NotFoundPage: NextPage = () => {
  const meta = {
    title: '404 Error',
    template: 'Page Not Found',
    description: 'The page you are looking for, are not found'
  }
  return (
    <Layout {...meta}>
      <section className={clsx('flex flex-col items-center justify-center', '-mt-16 md:-mt-20', 'min-h-screen')}>
        <h1 className='text-center'>404 | Not Found</h1>
        <p className='text-center max-w-prose my-4'>
          The page you are looking for, are not found, if you find this was a mistake, please contact us at{' '}
          <em>company@mail.cs</em>
        </p>
        <UnderlineLink href='/'>Back To Home</UnderlineLink>
      </section>
    </Layout>
  )
}

export default NotFoundPage

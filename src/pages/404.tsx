import Layout from '@/components/template/Layout'

import clsx from 'clsx'
import type { NextPage } from 'next'
import Link from 'next/link'

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
        <p className='text-center max-w-prose mt-4'>
          The page you are looking for, are not found, if you find this was a mistake, please contact us at{' '}
          <em>company@mail.cs</em>
        </p>
        <Link href='/'>
          <a className={clsx('mt-4', 'text-primary-3 dark:text-primary-2')}>Back to Home</a>
        </Link>
      </section>
    </Layout>
  )
}

export default NotFoundPage

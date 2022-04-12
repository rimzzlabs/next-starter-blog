import { Layout } from '@/components'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Layout title='Simple Starter Project' description='A simple NEXT.js starter project with Tailwind CSS'>
      <h1 className='text-center mt-56 md:mt-64'>Simple NEXT.js Starter!</h1>
    </Layout>
  )
}

export default Home

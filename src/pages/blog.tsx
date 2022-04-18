import Hero from '@/components/template/Hero'
import Layout from '@/components/template/Layout'

import type { NextPage } from 'next'

const BlogPage: NextPage = () => {
  const meta = {
    title: 'Blog',
    description: `I've been writing online since 2020, mostly about data science, machine learning and tech careers. On purpose for documentation while able to share my knowledge. Use the search below to filter by title.`
  }

  return (
    <Layout as='main' {...meta}>
      <Hero {...meta} />
    </Layout>
  )
}

export default BlogPage

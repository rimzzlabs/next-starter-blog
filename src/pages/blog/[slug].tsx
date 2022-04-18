import Layout from '@/components/template/Layout'

import { BlogProps } from '@/data/blog/blog.type'
import getBlog, { getBlogBySlug } from '@/helpers/getBlog'
import { dateFormat } from '@/libs/dateFormat'

import clsx from 'clsx'
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps, NextPage } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import 'prism-themes/themes/prism-night-owl.css'
import { ParsedUrlQuery } from 'querystring'

interface URLSlug extends ParsedUrlQuery {
  slug: string
}

interface BlogPostProps {
  mdxSource: MDXRemoteSerializeResult
  data: BlogProps
}

const BlogPost: NextPage<BlogPostProps> = ({ data, mdxSource }) => {
  return (
    <Layout as='article' title={data.title} description={data.summary}>
      <section className='border-b max-w-prose border-main-2 dark:border-main-3 py-10'>
        <h1>{data.title}</h1>
        <p>Published on {dateFormat(data.published)}</p>
      </section>

      <section className={clsx('prose md:prose-lg dark:prose-invert py-20')}>
        <MDXRemote {...mdxSource} />
      </section>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const blogs = getBlog()

  const paths = blogs.map((blog) => ({ params: { slug: blog.slug } })) as GetStaticPathsResult['paths']

  return {
    fallback: false,
    paths
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const mdxPrism = require('mdx-prism')

  const { slug } = ctx.params as URLSlug
  const blog = getBlogBySlug(slug)

  const mdxSource = await serialize(blog.content, { mdxOptions: { rehypePlugins: [mdxPrism] } })

  return {
    props: {
      mdxSource,
      data: blog.data
    }
  }
}

export default BlogPost

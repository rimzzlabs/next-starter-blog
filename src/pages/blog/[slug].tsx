import CustomImage from '@/components/mollecules/CustomImage'
import MDXComponents from '@/components/organism/MDXComponents'
import Layout from '@/components/template/Layout'

import { BlogProps } from '@/data/blog/blog.type'
import getBlog, { getBlogBySlug } from '@/helpers/getBlog'
import useMediaQuery from '@/hooks/useMediaQuery'
import useMetaData from '@/hooks/useMetaData'
import { dateFormat, dateStringToISO } from '@/libs/dateFormat'

import clsx from 'clsx'
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps, NextPage } from 'next'
import { MDXRemote, MDXRemoteProps, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import 'prism-themes/themes/prism-night-owl.css'
import { ParsedUrlQuery } from 'querystring'

interface URLSlug extends ParsedUrlQuery {
  slug: string
}

interface BlogPostProps {
  mdxSource: MDXRemoteSerializeResult
  data: BlogProps & { slug: string }
}

const BlogPost: NextPage<BlogPostProps> = ({ data, mdxSource }) => {
  const metaData = useMetaData(data)
  const isMediumScreen = useMediaQuery('(min-width: 768px)')

  return (
    <Layout {...metaData} as='main' title={data.title} description={data.summary}>
      <article>
        <figure className='w-full pt-0'>
          <CustomImage
            src={data.thumbnail ?? '/static/default-thumbnail.jpg'}
            alt={data.title}
            display='intrinsic'
            width={768}
            height={isMediumScreen ? 376 : 468}
            objectFit='cover'
            className='rounded'
          />
        </figure>
        <section className='border-b border-main-2 dark:border-main-3 py-10'>
          <h1 className='mb-8 md:text-5xl'>{data.title}</h1>
          <div className='flex items-center gap-4'>
            <CustomImage
              display='intrinsic'
              width={32}
              height={32}
              src={data.author_image ?? '/static/avatar.jpg'}
              alt={data.author_name}
              className='rounded-full'
            />
            <p className='text-sm md:text-base'>
              Written by {data.author_name} — on{' '}
              <time dateTime={dateStringToISO(data.published)}>{dateFormat(data.published)}</time>
            </p>
          </div>
        </section>

        <section
          className={clsx(
            'prose md:prose-lg dark:prose-invert py-20',
            'prose-a:no-underline prose-a:font-semibold prose-a:text-primary-4'
          )}
        >
          <MDXRemote {...mdxSource} components={MDXComponents as MDXRemoteProps['components']} />
        </section>
      </article>
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
      data: { ...blog.data, slug }
    }
  }
}

export default BlogPost

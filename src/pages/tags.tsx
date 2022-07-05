import BlogCard from '@/components/mollecules/BlogCard'
import Hero from '@/components/template/Hero'
import Layout from '@/components/template/Layout'

import { getBlog, ownerName } from '@/helpers'
import { twclsx } from '@/libs/twclsx'

import { GetStaticProps, NextPage } from 'next'
import { Blog } from 'next-starter-blog'
import { useCallback, useState } from 'react'

type TagsProps = { tags: string[]; blogs: Blog[] }

const Tags: NextPage<TagsProps> = ({ tags = [], blogs = [] }) => {
  const [selectedTags, setSelectedTag] = useState<string[]>([])

  const getClassName = (tagType: string) => {
    const tagColor: Record<string, string> = {
      hello: 'bg-primary-5 text-white',
      cat: 'bg-red-500 text-white',
      world: 'bg-sky-500 text-white',
      foss: 'bg-fuchsia-500 text-white',
      unfeatured: 'bg-slate-700 text-white',
      cats: 'bg-pink-500 text-white'
    }
    const defaultColor = 'text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800'

    return tagColor[tagType.toLowerCase()] || defaultColor
  }
  const meta = {
    title: 'Tags',
    template: ownerName,
    description: `Look for specific blog post based on your favorite blog tag.`,
    openGraph: {
      images: [
        {
          url: 'https://og-image.vercel.app/**Tags**%3Cbr%20%2F%3ELook%20for%20specicic%20blog%20post%20based%20on%20your%20favorite%20blog%20tag.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-bw-logo.svg',
          alt: 'NEXT.js Starter Blog',
          width: 1200,
          height: 600
        }
      ]
    }
  }

  const handleClick = useCallback(
    (value: string) => {
      setSelectedTag((prevState) =>
        prevState.includes(value) ? prevState.filter((t) => t !== value) : [...prevState, value]
      )
    },
    [selectedTags]
  )

  console.info(selectedTags)

  return (
    <Layout {...meta} as='main'>
      <Hero {...meta} />
      {tags.length > 0 && (
        <section className={twclsx('flex flex-col', 'mt-4 gap-4')}>
          <div className={twclsx('flex items-stretch flex-wrap', 'w-full', 'gap-2 mb-4 md:mb-8')}>
            {tags.map((tag) => (
              <button
                onClick={() => handleClick(tag)}
                key={tag}
                className={twclsx(
                  'inline-flex items-center justify-center',
                  'py-2 px-4 rounded-xl font-semibold transition-all',
                  !selectedTags.includes(tag) && 'motion-safe:active:scale-95 motion-safe:hover:scale-110',
                  !selectedTags.includes(tag) && selectedTags.length > 0
                    ? 'bg-neutral-500 text-white dark:bg-neutral-200 dark:text-neutral-900'
                    : getClassName(tag)
                )}
              >
                {tag}
              </button>
            ))}
          </div>

          {selectedTags.length > 0 && (
            <div className={twclsx('flex flex-col gap-4')}>
              <h2 className={twclsx('mb-4')}>Based on your search:</h2>
              <div className={twclsx('grid grid-cols-1', 'gap-4 flex-auto')}>
                {blogs
                  .filter((blog) => selectedTags.map((t) => blog.tags.includes(t)).includes(true))
                  .map((blog) => (
                    <BlogCard layout='column' key={blog.slug} {...blog} />
                  ))}
              </div>
            </div>
          )}
        </section>
      )}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<TagsProps> = async () => {
  const blogs = await getBlog()

  const tags = blogs
    .map((b) => b.data.tags)
    .flat()
    .filter((blog, i, blogs) => blogs.indexOf(blog) === i)

  return {
    props: {
      tags,
      blogs: blogs.map((b) => ({ ...b.data, slug: b.slug }))
    }
  }
}

export default Tags

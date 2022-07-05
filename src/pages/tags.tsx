import Hero from '@/components/template/Hero'
import Layout from '@/components/template/Layout'

import { getBlog, ownerName } from '@/helpers'
import { twclsx } from '@/libs/twclsx'

import { GetStaticProps, NextPage } from 'next'

type TagsProps = { tags: string[] }

const Tags: NextPage<TagsProps> = ({ tags = [] }) => {
  const tagColor: Record<string, string> = {
    hello: 'bg-primary-5 text-white',
    cat: 'bg-red-500 text-white',
    world: 'bg-sky-500 text-white',
    foss: 'bg-fuchsia-500 text-white',
    unfeatured: 'bg-slate-700 text-white',
    cats: 'bg-pink-500 text-white'
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

  return (
    <Layout {...meta} as='main'>
      <Hero {...meta} />
      {tags.length > 0 && (
        <section className={twclsx('flex flex-col', 'mt-4 gap-4')}>
          <div className={twclsx('flex items-stretch flex-wrap', 'w-full', 'gap-2')}>
            {tags.map((tag) => (
              <button
                key={tag}
                className={twclsx(
                  'inline-flex items-center justify-center',
                  'py-2 px-4 rounded-xl font-semibold',
                  tagColor[tag.toLowerCase()]
                )}
              >
                {tag}
              </button>
            ))}
          </div>
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
      tags
    }
  }
}

export default Tags

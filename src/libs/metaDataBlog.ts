import { CustomSeoProps } from '@/components/atoms/CustomSeo'

import { dateStringToISO } from './dateFormat'

import { Blog } from 'next-starter-blog'

export interface MetaData extends Blog {
  slug: string
}

/**
 * It takes a blog post object and returns a custom SEO object
 * @param {MetaData} data - MetaData of the html meta tag used on [slug] page.
 * @returns An object of CustomSeoProps
 */
export const generateMetaDataBlog = (data: MetaData): CustomSeoProps => {
  const ISODate = dateStringToISO(data.published)
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL

  return {
    title: data.title,
    description: data.summary,
    canonical: siteURL + data.slug,
    openGraph: {
      article: { authors: [data.author_name], publishedTime: ISODate, tags: data.tags },
      type: 'blog',
      images: [
        {
          // TODDO: update your default thumbnail at public/static/
          url: data.thumbnail ?? '/static/default-thumbnail.jpg',
          alt: data.title,
          width: 1200,
          height: 600
        }
      ],
      url: siteURL + data.slug
    },
    twitter: {
      cardType: 'summary_large_image',
      // TODO: Change to your Tiwetter username
      site: '@john_doe',
      handle: '@john_doe'
    },
    additionalMetaTags: [
      {
        name: 'ARTICLE:PUBLISHED_TIME',
        content: ISODate
      },
      {
        name: 'ARTICLE:TAGS',
        content: data.keywords.join(',')
      },
      {
        name: 'PUBLISH_DATE',
        content: ISODate
      },
      {
        name: 'keywords',
        content: data.keywords.join(',')
      },
      {
        name: 'author',
        content: data.author_name
      }
    ]
  }
}

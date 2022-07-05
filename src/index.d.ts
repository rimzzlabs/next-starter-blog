declare module 'next-starter-blog' {
  export type Blog = {
    featured: boolean
    title: string
    summary: string
    published: string
    last_modified: string
    thumbnail?: string
    author_name: string
    author_image: string
    tags: Array<string>
    keywords: Array<string>
    slug: string
  }
}

import getPathDirectory, { CONTENT_DIRECTORY } from './getPathDirectory'

import * as fs from 'fs/promises'
import matter from 'gray-matter'
import { Blog } from 'next-starter-blog'
import * as path from 'path'

/**
 * It takes a slug as a parameter, and returns an object with the data and content of the blog post.
 * The data is the frontmatter of the blog post, and the content is the body of the blog post.
 * The data is typed as Blog, which is an interface that I created in the `@/data/blog/blog.types.ts` file.

 * The function uses the slug to find the blog post, and then uses the matter function to parse the
 * frontmatter and body of the blog post.
 *
 * The function returns an object with the data and content of the blog post.
 * @param slug - the slug of the blog post
 * @returns The data and content of the blog post.
 */
export const getBlogBySlug = async (slug: string) => {
  const PATH_DIR = path.join(`${CONTENT_DIRECTORY}/blog`, `${slug}.mdx`)
  const file = await fs.readFile(PATH_DIR, 'utf8')

  const { data, content } = matter(file)

  return {
    data: data as Blog,
    content
  }
}

/**
 * It takes the path of the blog directory, gets all the files in that directory, reads the file, and
 * returns an object with the data, slug, and content of the file.
 *
 * The data is the frontmatter of the file, the slug is the name of the file, and the content is the
 * content of the file.
 *
 * The data is typed as Blog, which we can see at '@/data/blog/blog.type.ts'
 * @returns An array of objects.
 */
const getBlog = async () => {
  const paths = await getPathDirectory('/blog')

  const files = paths.map(async (p) => {
    const PATH_DIR = path.join(`${CONTENT_DIRECTORY}/blog`, p)
    const file = await fs.readFile(PATH_DIR, 'utf8')

    const { data, content } = matter(file)

    return {
      data: data as Blog,
      slug: p.replace('.mdx', ''),
      content
    }
  })

  return await Promise.all(files)
}

export default getBlog

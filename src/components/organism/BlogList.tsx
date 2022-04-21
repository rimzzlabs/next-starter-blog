import BlogCard from '@/components/mollecules/BlogCard'

import { BlogProps } from '@/data/blog/blog.type'

import clsx from 'clsx'

interface BlogListProps {
  title: string
  blogs: Array<BlogProps & { slug: string }>
  layout?: 'column' | 'row'
  className?: string
  children?: React.ReactNode
}

const BlogList: React.FunctionComponent<BlogListProps> = ({ blogs, children, title, className, layout = 'row' }) => {
  return (
    <section className={className}>
      <h2>{title}</h2>
      {blogs.length > 0 && (
        <ul className={clsx('grid grid-cols-1 gap-4 flex-auto my-4', layout === 'row' && 'md:grid-cols-2')}>
          {blogs.map((val) => (
            <li key={val.slug}>
              <BlogCard layout={layout} {...val} />
            </li>
          ))}
        </ul>
      )}
      {children}
    </section>
  )
}

export default BlogList

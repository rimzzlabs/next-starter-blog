import UnstyledLink from '@/components/atoms/UnstyledLink'

import { BlogProps } from '@/data/blog/blog.type'

import clsx from 'clsx'

const BlogCard: React.FunctionComponent<BlogProps & { slug: string }> = ({ slug, title, tags }) => {
  return (
    <UnstyledLink
      className={clsx(
        'flex-col p-4',
        'border rounded-lg transition',
        'border-main-2 dark:border-main-3',
        'hover:border-main-4 dark:hover:border-main-2'
      )}
      href={`/blog/${slug}`}
    >
      <h3>{title}</h3>
      <div className='mt-[0.675em] flex items-center space-x-2'>
        {tags.map((t) => (
          <span key={t}>#{t.toLowerCase()}</span>
        ))}
      </div>
    </UnstyledLink>
  )
}

export default BlogCard

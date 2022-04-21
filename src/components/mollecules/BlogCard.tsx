import UnstyledLink from '@/components/atoms/UnstyledLink'

import { BlogProps } from '@/data/blog/blog.type'

import clsx from 'clsx'

interface BlogCardProps extends BlogProps {
  slug: string
  layout: 'row' | 'column'
}

const BlogCard: React.FunctionComponent<BlogCardProps> = ({ slug, title, summary, layout = 'row' }) => {
  return (
    <UnstyledLink
      className={clsx(
        'flex flex-col p-4 w-full h-full',
        'border rounded-lg transition',
        'border-main-2 dark:border-main-3',
        'hover:border-main-4 dark:hover:border-main-2'
      )}
      href={`/blog/${slug}`}
    >
      <h3>{title}</h3>
      {layout === 'column' && <p className='mt-[0.675em]'>{summary}</p>}
    </UnstyledLink>
  )
}

export default BlogCard

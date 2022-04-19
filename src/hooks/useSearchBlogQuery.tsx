import { BlogProps } from '@/data/blog/blog.type'

import { useEffect, useState } from 'react'

type BlogList = Array<BlogProps & { slug: string }>

const useSearchBlogQuery = (blogList: BlogList) => {
  const [query, setQuery] = useState('')
  const [filteredBlog, setFilteredBlog] = useState<BlogList>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)

  useEffect(() => {
    const blogs = blogList.filter(
      (blog) =>
        blog.title.toLowerCase().includes(query.toLocaleLowerCase()) ||
        blog.tags.forEach((t) => t.toLowerCase().includes(query.toLowerCase()))
    )
    setFilteredBlog(blogs)
  }, [query])

  return {
    handleChange,
    filteredBlog,
    query
  }
}

export default useSearchBlogQuery

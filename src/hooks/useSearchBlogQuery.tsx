import { BlogProps } from '@/data/blog/blog.type'
import * as atom from '@/stores'

import { useAtom } from 'jotai'
import { useEffect } from 'react'

const useSearchBlogQuery = (blogList: Array<BlogProps>) => {
  const [query, setQuery] = useAtom(atom.atomSearchBlogQuery)
  const [filteredBlog, setFilteredBlog] = useAtom(atom.atomBlog)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)

  useEffect(() => {
    const blogs = blogList.filter(
      (blog) =>
        blog.title.toLowerCase().includes(query.toLocaleLowerCase()) ||
        blog.tags.map((t) => t.toLowerCase().includes(query.toLowerCase()))
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

import { BlogProps } from '@/data/blog/blog.type'

import { atom } from 'jotai'

export const atomDrawer = atom<boolean>(false)
export const atomMediaQuery = atom<boolean>(false)
export const atomSearchBlogQuery = atom<string>('')
export const atomBlog = atom<Array<BlogProps>>([])

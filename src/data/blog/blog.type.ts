export interface BlogProps {
  title: string
  summary: string
  published: string
  last_modified: string
  og_image?: string
  author_name: string
  author_image: string
  tags: Array<string>
  keywords: Array<string>
}

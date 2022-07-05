export interface AppRoute {
  children: string
  href: string
}

export const APP_ROUTE: Array<AppRoute> = [
  {
    children: 'Home',
    href: '/'
  },
  {
    children: 'Blog',
    href: '/blog'
  },
  {
    children: 'Tags',
    href: '/tags'
  }
]

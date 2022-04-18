import { NextSeo, NextSeoProps } from 'next-seo'

export interface CustomSeoProps extends NextSeoProps {
  template?: string
}

const OWNER_NAME = process.env.NEXT_PUBLIC_OWNER_NAME

/**
 * It takes a custom Seo component, extended from next-seo, and returns a `NextSeo component`
 * @returns The NextSeo component is being returned
 */
const CustomSeo: React.FunctionComponent<CustomSeoProps> = ({ template, ...props }) => {
  // if there is no template provided, use the default template which is your Name
  // if you pass title = "next admin" and template = "gakidomo"
  // the result would be = "next admin — gakidomo" otherwise it would be = "next admin — Next.js App"
  const customTemplate = `%s — ${template ?? OWNER_NAME}`

  // feel free to customize, the props, like default author, default publisher, default image, etc..
  return <NextSeo {...props} titleTemplate={customTemplate} />
}

export default CustomSeo

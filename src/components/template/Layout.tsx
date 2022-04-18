import CustomSeo, { CustomSeoProps } from '@/components/atoms/CustomSeo'

import React from 'react'

interface LayoutProps extends CustomSeoProps {
  title: string
  description: string
  children: React.ReactNode
  as?: 'div' | 'main' | 'article'
}

/**
 * Layout is a React.FunctionComponent that takes a LayoutProps object and returns a div with a
 * CustomSeo component and the children prop.
 * The Layout being used would be more consistent with the other pages,  wraped by `<main>` tag
 * @param  - children - the content of the page
 * @returns A React component that is a function that takes in a LayoutProps object and returns a div
 * with a CustomSeo component and the children prop.
 */
const Layout: React.FunctionComponent<LayoutProps> = ({ children, as = 'div', ...props }) => {
  return React.createElement(as, { className: 'layout mt-20' }, <CustomSeo {...props} />, children)
}

export default Layout

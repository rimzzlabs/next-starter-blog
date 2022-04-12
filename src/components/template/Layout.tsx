import { CustomSeo, CustomSeoProps } from '@/components'

interface LayoutProps extends CustomSeoProps {
  title: string
  description: string
  children: React.ReactNode
}

/**
 * Layout is a React.FunctionComponent that takes a LayoutProps object and returns a div with a
 * CustomSeo component and the children prop.
 * The Layout being used would be more consistent with the other pages
 * @param  - children - the content of the page
 * @returns A React component that is a function that takes in a LayoutProps object and returns a div
 * with a CustomSeo component and the children prop.
 */
export const Layout: React.FunctionComponent<LayoutProps> = ({ children, ...props }) => {
  return (
    <div className='layout mt-16 md:mt-20'>
      <CustomSeo {...props} />
      {children}
    </div>
  )
}

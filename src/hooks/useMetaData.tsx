import { MetaData, generateMetaDataBlog } from '@/libs/metaDataBlog'

import { useRouter } from 'next/router'

const useMetaData = (metaData: MetaData) => {
  const { asPath } = useRouter()
  return generateMetaDataBlog({ ...metaData, slug: asPath })
}

export default useMetaData

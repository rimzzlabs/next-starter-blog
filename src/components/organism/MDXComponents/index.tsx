import Blockquote from '@/components/contents/Blockquote'
import InlineCode from '@/components/contents/InlineCode'
import Pre from '@/components/contents/Pre'
import UnderlineLink from '@/components/mollecules/UnderlineLink'

import { MDXRemoteProps } from 'next-mdx-remote'

const MDXComponents = {
  a: UnderlineLink,
  blockquote: Blockquote,
  code: InlineCode,
  pre: Pre
}

export default MDXComponents as MDXRemoteProps['components']

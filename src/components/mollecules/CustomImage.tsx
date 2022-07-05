import Image, { ImageProps } from 'next/image'

interface CustomImageProps extends ImageProps {
  display: 'responsive' | 'intrinsic'
  alt: string
}

/**
 * @description A custom image component that can be used to display images in a responsive or intrinsic way.
 * if you want to use the intrinsic way, please provide a width and height props,
 * otherwise it will have a default width and height of 144px.
 *
 * If you want to use the responsive way, the width and height props are not required.
 * the only thing to do is wrap the element inside an element, and the parent element must have a position of relative.
 * then the parent element must have a width and height
 * @example - with tailwindcss
 * ```tsx
 * <div className="relative w-24 h-24 md:h-40 md:w-40">
 *  <CustomImage src="/static/images/image.jpg" display="responsive" alt="my image" />
 * </div>
 * ```
 *
 * @returns
 */
const CustomImage: React.FunctionComponent<CustomImageProps> = ({
  src,
  alt,
  width = 144,
  height = 144,
  display,
  ...props
}) => {
  if (display === 'responsive') {
    return (
      <Image
        layout='fill'
        src={src}
        alt={alt}
        title={alt}
        loading='lazy'
        // placeholder='blur'
        // blurDataURL='/static/images/blur.png'
        {...props}
      />
    )
  }

  return (
    <Image
      layout='intrinsic'
      src={src}
      alt={alt}
      title={alt}
      width={width}
      height={height}
      loading='lazy'
      //   placeholder='blur'
      //   blurDataURL='/static/images/blur.png'
      {...props}
    />
  )
}

export default CustomImage

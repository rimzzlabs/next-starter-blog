import CustomImage from '@/components/mollecules/CustomImage'

import { twclsx } from '@/libs/twclsx'

export interface HeroProps {
  title: string
  description: string
  image: string
  imageAlt: string
  children?: React.ReactNode
}

const HeroWithPhoto: React.FunctionComponent<HeroProps> = (props) => {
  return (
    <section className={twclsx('pb-20 pt-10')}>
      <div
        className={twclsx(
          'flex flex-col-reverse',
          'gap-4 mb-4 md:gap-0',
          'md:flex-row md:items-center md:justify-between'
        )}
      >
        <h1 className={twclsx('text-4xl md:text-5xl')}>{props.title}</h1>
        <figure className={twclsx('relative', 'w-20 h-20 md:w-24 md:h-24')}>
          <CustomImage src={props.image} className={twclsx('rounded-3xl')} alt={props.imageAlt} display='responsive' />
        </figure>
      </div>
      <p className={twclsx('max-w-prose')}>{props.description}</p>
      {props.children}
    </section>
  )
}

export default HeroWithPhoto

import { twclsx } from '@/libs/twclsx'

export interface HeroProps {
  title: string
  description: string
  children?: React.ReactNode
}

const Hero: React.FunctionComponent<HeroProps> = ({ title, description, children }) => {
  return (
    <section className={twclsx('pb-20 pt-10')}>
      <h1 className={twclsx('text-4xl md:text-5xl')}>{title}</h1>
      <p className={twclsx('max-w-prose')}>{description}</p>
      {children}
    </section>
  )
}

export default Hero

export interface HeroProps {
  title: string
  description: string
  children?: React.ReactNode
}

const Hero: React.FunctionComponent<HeroProps> = ({ title, description, children }) => {
  return (
    <section className='pb-20 pt-10'>
      <h1 className='text-4xl md:text-5xl'>{title}</h1>
      <p className='max-w-prose'>{description}</p>
      {children}
    </section>
  )
}

export default Hero

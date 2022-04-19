import { SearchIcon } from '@heroicons/react/outline'
import clsx from 'clsx'

interface SearchbarProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

const Searchbar: React.FunctionComponent<SearchbarProps> = ({ placeholder, ...props }) => {
  return (
    <div
      className={clsx(
        'flex items-center mb-20',
        'w-full h-12 rounded-lg focus-within:ring',
        'border border-main-2 dark:border-main-3',
        'bg-transparent transition-all',
        'ring-main-2 dark:ring-main-3',
        'ring-offset-2 ring-offset-white dark:ring-offset-main-5'
      )}
    >
      <div className='inline-flex items-center justify-center w-12 h-full'>
        <SearchIcon className='w-4 h-4 text-main-5 dark:text-main-3' />
      </div>
      <input
        {...props}
        type='text'
        className='w-full h-full pr-4 outline-none bg-transparent'
        placeholder={placeholder ?? 'Search something..'}
      />
    </div>
  )
}

export default Searchbar

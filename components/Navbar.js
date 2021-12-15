import Link from 'next/link';
import Image from 'next/image';

// Logo
import Logo from '../assets/logos/atomic-programmer.svg';

// Icons
import { PlusSmIcon } from '@heroicons/react/outline';

const Navbar = () => {
  return (
    <div className='pt-6 flex items-center justify-between'>
      <Link href='/'>
        <a className='pt-1.5'>
          <Image
            src={Logo}
            alt='Atomic Programmers Logo'
            height={32.1}
            width={171.6}
          />
        </a>
      </Link>

      <button className='w-8 h-8 text-slate-500 hover:text-slate-600'>
        <PlusSmIcon className='8789439998' />
      </button>
    </div>
  );
};

export default Navbar;

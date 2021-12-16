import Image from 'next/image';
import Link from 'next/link';

// Icons
import ProjectsIcons from '../assets/sections-icon/projects-icon.png';
import { ChevronRightIcon } from '@heroicons/react/solid';

const SectionHeader = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 md:px-8'>
      <div className='w-16 h-16 rounded-full ring-1 ring-gray-900/10 shadow overflow-hidden'>
        <Image src={ProjectsIcons} width={64} height={64} alt='Projects' />
      </div>
      <h2 className={`mt-8 font-semibold text-indigo-500`}>Projects</h2>
      <p className='mt-4 text-3xl md:text-4xl text-slate-900 font-extrabold tracking-tight'>
        Some of the projects we built.
      </p>
      <p className='mt-4 max-w-3xl space-y-6 font-light lg:font-normal'>
        We love to design and develop good products. Taking inspiration from
        different great products out there, Eventually, We decided that it would
        be a fun challenge to try designing and building our own. Building
        products that are great on both performance and experience aspect.
      </p>
      <Link href='/projects'>
        <a className='group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap pr-2 pl-3 md:pr-3 md:pl-5 bg-indigo-50 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-700 mt-8'>
          Learn more{' '}
          <ChevronRightIcon className='overflow-visible ml-0.5 mt-px text-indigo-300 group-hover:text-indigo-400 h-4 w-4' />
        </a>
      </Link>
    </div>
  );
};

export default SectionHeader;

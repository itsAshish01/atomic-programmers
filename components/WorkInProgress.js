import Link from 'next/link';
import Lottie from './Lottie';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import AtomicProgrammers from '../assets/logos/atomic-programmer.svg';
import Image from 'next/image';

const WorkInProgress = () => {
  return (
    <div className='container p-8 flex flex-col items-center gap-12 mx-auto xl:gap-0'>
      <div className='self-start'>
        <Image
          src={AtomicProgrammers}
          width={171.6}
          height={32.1}
          alt='Atomic Programmers'
        />
      </div>
      <div className=''>
        <Lottie name='work.json' />
        <p className='text-center font-semibold text-slate-600 xl:-translate-y-12'>
          Our team is currently working on this, please visit after some days.
        </p>
      </div>

      <Link href='/'>
        <a className='flex items-center gap-1 text-white font-semibold bg-slate-800 px-4 py-3 rounded-lg hover:bg-slate-700'>
          {' '}
          <ArrowLeftIcon className='h-4 w-4' />
          Back to home
        </a>
      </Link>
    </div>
  );
};

export default WorkInProgress;

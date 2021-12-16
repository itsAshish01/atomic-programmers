import Link from 'next/link';

// Components
import Navbar from '../components/Navbar';
import Lottie from '../components/Lottie';

const Hero = () => {
  return (
    <header className='bg-slate-50 px-4 md:px-6 lg:px-8 lg:max-h-[40rem] xl:max-h-[45rem]'>
      <Navbar />
      <div className='pt-20 md:pt-24 lg:pt-32 md:grid md:grid-cols-2 2xl:gap-x-32'>
        <div className='-translate-y-24 md:-translate-y-12 md:order-last lg:-translate-y-20 xl:-translate-y-40 2xl:max-h-[40rem] 2xl:max-w-[40rem]'>
          <Lottie name='hero-atom.json' />
        </div>
        <div className='-translate-y-28 md:justify-self-center md:-translate-y-0 2xl:justify-self-end'>
          <h1 className='text-slate-900 font-extrabold text-5xl text-center md:text-left lg:text-6xl tracking-tight'>
            You don&apos;t
            <br />
            realize, but
            <br />
            we <span className='text-sky-500'>EXIST!</span>
          </h1>
          <p className='text-center mt-6 text-lg text-slate-600 md:text-left md:text-base lg:text-lg'>
            We design and code beautifully simple
            <br />
            things, and We love what we do.
          </p>
          <Link href='/about'>
            <a className='bg-slate-900 hover:bg-slate-700 focus:outline-none text-white font-semibold text-sm px-6 py-3 rounded-lg w-full inline-flex items-center justify-center mt-6 md:w-auto md:mt-10'>
              Look inside
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;

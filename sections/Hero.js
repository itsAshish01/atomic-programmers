// Components
import Link from 'next/link';
import Navbar from '../components/Navbar';

const Hero = () => {
  return (
    <header className='bg-slate-50 px-4 md:px-6 lg:px-8'>
      <Navbar />
      <div className='pt-20 md:pt-24 lg:pt-32 md:grid md:grid-cols-2'>
        <div className='md:justify-self-center'>
          <h1 className='text-slate-900 font-extrabold text-5xl text-center md:text-left lg:text-6xl tracking-tight'>
            You don&apos;t
            <br />
            realize, but
            <br />
            we <span className='text-sky-500'>EXIST!</span>
          </h1>
          <p className='text-center mt-6 text-lg text-slate-600 md:text-left'>
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

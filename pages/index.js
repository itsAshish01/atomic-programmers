import Head from 'next/head';

// Sections
import Hero from '../sections/Hero';
import SectionAbout from '../sections/SectionAbout';
import SectionProjects from '../sections/SectionProjects';
import SectionDesigns from '../sections/SectionDesigns';
import SectionTools from '../sections/SectionTools';
import SectionWhyUs from '../sections/SectionWhyUs';
import SectionMessage from '../sections/SectionMessage';
import Footer from '../sections/Footer';

export default function Home() {
  return (
    <div className='text-slate-500'>
      <Head>
        <title>Atomic Programmers</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <Hero />
      <SectionAbout />
      <SectionProjects />
      <SectionDesigns />
      <SectionTools />
      <SectionWhyUs />
      <SectionMessage />
      <Footer />
    </div>
  );
}

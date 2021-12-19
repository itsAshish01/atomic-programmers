import Image from 'next/image';
import Link from 'next/link';

import Logo from '../assets/logos/atomic-programmer.svg';

const footerContent = [
  {
    title: 'About',
    array: [
      { name: 'Team', to: '/about' },
      { name: 'Projects', to: '/about' },
      { name: 'Why Us?', to: '/about' },
      { name: 'Tools', to: '/about' },
    ],
  },

  {
    title: 'Social',
    array: [
      { name: 'Github', to: '/about' },
      { name: 'Instagram', to: '/about' },
      { name: 'Twitter', to: '/about' },
      { name: 'Dribbble', to: '/about' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className='container mx-auto pt-20 pb-16 text-sm leading-6 px-5 lg:pt-40'>
      <div className='max-w-7xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8'>
        <div className='flex'>
          {footerContent.map((content) => (
            <div
              key={content.title}
              className='flex-none w-1/2 space-y-10 sm:space-y-8 lg:flex lg:space-y-0 lg:w-1/5'
            >
              <div className='lg:flex-none lg:w-1/2'>
                <h2 className='font-semibold text-gray-900'>{content.title}</h2>
                <ul className='mt-3 space-y-2'>
                  {content.array.map((item) => (
                    <li key={item.name}>
                      <Link href={item.to}>
                        <a className='hover:text-slate-900'>{item.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-16 pt-10'>
          <Image
            src={Logo}
            alt='Atomic Programmers Logo'
            width={171.6}
            height={32.1}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

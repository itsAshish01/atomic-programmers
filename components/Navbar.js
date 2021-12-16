import Link from 'next/link';
import Image from 'next/image';

// Logo
import Logo from '../assets/logos/atomic-programmer.svg';

// Icons
import { PlusSmIcon } from '@heroicons/react/outline';

// Disclosure
import { Disclosure } from '@headlessui/react';

const navigation = [
  { name: 'Inside the atom', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Designs', href: '/designs' },
  { name: 'Tools', href: '/tools' },
  { name: 'Why Us?', href: '/why-us' },
  { name: 'Say Hello!', href: '/message' },
];

const Navbar = () => {
  return (
    <Disclosure as='nav'>
      {({ open }) => (
        <>
          <div className='pt-6 lg:pt-8'>
            <div className='flex items-center justify-between'>
              <Link href='/'>
                <a className='pt-1.5'>
                  <Image src={Logo} alt='Logo' width={171.6} height={32.1} />
                </a>
              </Link>
              <div className='flex items-center lg:hidden'>
                <Disclosure.Button className='text-slate-500 hover:text-slate-600'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <PlusSmIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <PlusSmIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>

              <nav className='hidden lg:flex'>
                <div className='flex lg:gap-x-6'>
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a className='text-sm font-semibold text-slate-700 hover:text-sky-500'>
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          </div>

          <Disclosure.Panel className='lg:hidden'>
            <div className='px-2 pt-6 pb-3 flex flex-col gap-y-3'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className='text-sm font-semibold text-slate-700 hover:text-sky-500'
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;

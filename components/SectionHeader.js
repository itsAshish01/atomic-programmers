import Image from 'next/image';
import Link from 'next/link';

// Icons
import { ChevronRightIcon } from '@heroicons/react/solid';

const SectionHeader = ({ section, colors, extra }) => {
  return (
    <div className='max-w-7xl mx-auto px-4 md:px-8'>
      <div className='w-16 h-16 rounded-full ring-1 ring-gray-900/10 shadow overflow-hidden'>
        <Image src={section.icon} width={64} height={64} alt='Projects' />
      </div>
      <h2 className={`mt-8 font-semibold ${colors.primary}`}>
        {section.title}
      </h2>
      {!extra && (
        <p className='mt-4 text-3xl md:text-4xl text-slate-900 font-extrabold tracking-tight'>
          {section.subTitle}
        </p>
      )}
      {extra && (
        <p className='mt-4 text-3xl md:text-4xl text-slate-900 font-extrabold tracking-tight'>
          Tools we <span className='line-through'>use</span> love.
        </p>
      )}
      <p className='mt-4 max-w-3xl space-y-6 font-light lg:font-normal'>
        {section.description}
      </p>
      <Link href={section.to}>
        <a
          className={`group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap pr-2 pl-3 md:pr-3 md:pl-5 ${colors.linkBg} ${colors.linkText} ${colors.linkHoverBg} ${colors.linkHoverText} mt-8`}
        >
          {section.linkText}{' '}
          <ChevronRightIcon
            className={`overflow-visible ml-0.5 mt-px ${colors.chevron} ${colors.chevronHover} h-4 w-4`}
          />
        </a>
      </Link>
    </div>
  );
};

export default SectionHeader;

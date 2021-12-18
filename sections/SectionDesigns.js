// Logo
import DesignsIcons from '../assets/sections-icon/designs-icon.png';
import SectionHeader from '../components/SectionHeader';

// Icons
import { TemplateIcon } from '@heroicons/react/outline';
import { PhotographIcon } from '@heroicons/react/outline';
import { DesktopComputerIcon } from '@heroicons/react/outline';
import { QrcodeIcon } from '@heroicons/react/outline';

// Logos
import Logo1 from '../assets/designs/design-logos/logo1.png';
import Logo2 from '../assets/designs/design-logos/logo2.png';
import Logo3 from '../assets/designs/design-logos/logo3.png';
import Logo4 from '../assets/designs/design-logos/logo4.png';
import Logo5 from '../assets/designs/design-logos/logo5.png';
import Logo6 from '../assets/designs/design-logos/logo6.png';
import SectionTabs from '../components/SectionTabs';
import DesignTabs from '../Tabs/DesignTabs';

const details = {
  icon: DesignsIcons,
  title: 'Designs',
  subTitle: 'Some of the designs we made.',
  description:
    '"There are three responses to a piece of design - yes, no, and WOW! Wow is the one to aim for." - Milton Glaser. And here in Atomic Programmers we always try to follow this &  make designs that users love. We design logos, posters, landing pages, apps & the things you need to WOW your users.',
  linkText: 'See more',
  to: '/designs',
};

const colors = {
  primary: 'text-pink-500',
  linkBg: 'bg-pink-50',
  linkText: 'text-pink-600',
  linkHoverBg: 'hover:bg-pink-100',
  linkHoverText: 'hover:text-pink-700',
  chevron: 'text-pink-300',
  chevronHover: 'group-hover:text-pink-400',
};

const designs = [
  {
    name: 'Logos',
    icon: <QrcodeIcon />,
    imgs: [
      { url: Logo1, alt: 'Ramgarh Cart' },
      { url: Logo2, alt: 'Krypto' },
      { url: Logo3, alt: 'Thinkcode' },
      { url: Logo4, alt: 'Speedo' },
      { url: Logo5, alt: 'Waves Music' },
      { url: Logo6, alt: 'Trackmate' },
    ],
  },
  // {
  //   name: 'Posters',
  //   icon: <PhotographIcon />,
  //   imgs: [
  //     { url: Logo1, alt: 'Ramgarh Cart' },
  //     { url: Logo2, alt: 'Krypto' },
  //     { url: Logo3, alt: 'Thinkcode' },
  //     { url: Logo4, alt: 'Speedo' },
  //     { url: Logo5, alt: 'Waves Music' },
  //     { url: Logo6, alt: 'Trackmate' },
  //   ],
  // },
  // {
  //   name: 'Landing',
  //   icon: <DesktopComputerIcon />,
  //   imgs: [
  //     { url: Logo1, alt: 'Ramgarh Cart' },
  //     { url: Logo2, alt: 'Krypto' },
  //     { url: Logo3, alt: 'Thinkcode' },
  //     { url: Logo4, alt: 'Speedo' },
  //     { url: Logo5, alt: 'Waves Music' },
  //     { url: Logo6, alt: 'Trackmate' },
  //   ],
  // },
  // {
  //   name: 'Product',
  //   icon: <TemplateIcon />,
  //   imgs: [
  //     { url: Logo1, alt: 'Ramgarh Cart' },
  //     { url: Logo2, alt: 'Krypto' },
  //     { url: Logo3, alt: 'Thinkcode' },
  //     { url: Logo4, alt: 'Speedo' },
  //     { url: Logo5, alt: 'Waves Music' },
  //     { url: Logo6, alt: 'Trackmate' },
  //   ],
  // },
];

const SectionDesigns = () => {
  return (
    <section className='pt-20 md:pt-40'>
      <div className='container mx-auto'>
        <SectionHeader section={details} colors={colors} />
      </div>
      <SectionTabs
        color='text-pink-500'
        projects={designs}
        Component={DesignTabs}
      />
    </section>
  );
};

export default SectionDesigns;

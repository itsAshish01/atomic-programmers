// Components
import SectionHeader from '../components/SectionHeader';
import SectionTabs from '../components/SectionTabs';
import WhyTab from '../Tabs/WhyTabs';

// Logo
import WhyUsIcon from '../assets/sections-icon/why-us-icon.png';

// Icons
import { ClockIcon } from '@heroicons/react/outline';
import { LightningBoltIcon } from '@heroicons/react/outline';
import { BadgeCheckIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/outline';

// Illustrations
import OnTime from '../assets/illustrations/time.svg';
import InstantSupport from '../assets/illustrations/instant.svg';
import TopQuality from '../assets/illustrations/top.svg';
import Secure from '../assets/illustrations/safe.svg';

const details = {
  icon: WhyUsIcon,
  title: 'Why Us?',
  subTitle: 'Why Atomic Programmers?',
  description:
    'The Atomic Programmers difference. Even more reasons to choose us.',
  linkText: 'See more',
  to: '/tools',
};

const colors = {
  primary: 'text-blue-500',
  linkBg: 'bg-blue-50',
  linkText: 'text-blue-600',
  linkHoverBg: 'hover:bg-blue-100',
  linkHoverText: 'hover:text-blue-700',
  chevron: 'text-blue-300',
  chevronHover: 'group-hover:text-blue-400',
};

const features = [
  {
    name: 'On time delivery',
    icon: <ClockIcon />,
    img: OnTime,
    text: '"We adhere to deadlines, not promises" Get your money back if we are not able to meet your expectations on time.',
  },
  {
    name: 'Instant support',
    icon: <LightningBoltIcon />,
    img: InstantSupport,
    text: 'Chat with our customer service team or call us over WhatsApp. Our team is available 24x7 to assist you.',
  },
  {
    name: 'Safe & secure',
    icon: <BadgeCheckIcon />,
    img: Secure,
    text: 'We do not disclose any information given to us. You can feel safe knowing your information is secure.',
  },
  {
    name: 'Top quality',
    icon: <StarIcon />,
    img: TopQuality,
    text: 'We provide you content designed with the latest tech. We have a dedicated team to provide you with the service.',
  },
];

const SectionWhyUs = () => {
  return (
    <section className='pt-20 md:pt-40'>
      <div className='container mx-auto'>
        <SectionHeader section={details} colors={colors} />
      </div>
      <SectionTabs
        projects={features}
        color='text-blue-500'
        Component={WhyTab}
      />
    </section>
  );
};

export default SectionWhyUs;

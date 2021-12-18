// Components
import SectionHeader from '../components/SectionHeader';
import Feature from '../components/Feature';

// Logo
import WhyUsIcon from '../assets/sections-icon/why-us-icon.png';

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

const SectionWhyUs = () => {
  return (
    <section className='pt-20 md:pt-40'>
      <div className='container mx-auto'>
        <SectionHeader section={details} colors={colors} />
      </div>
      <Feature />
    </section>
  );
};

export default SectionWhyUs;

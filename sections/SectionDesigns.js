// Logo
import DesignsIcons from '../assets/sections-icon/designs-icon.png';
import SectionHeader from '../components/SectionHeader';

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

const SectionDesigns = () => {
  return (
    <section className='pt-20 md:pt-40'>
      <div className='container mx-auto'>
        <SectionHeader section={details} colors={colors} />
      </div>
    </section>
  );
};

export default SectionDesigns;

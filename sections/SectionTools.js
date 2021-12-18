// components
import SectionHeader from '../components/SectionHeader';
import SectionTabs from '../components/SectionTabs';

// Logo
import ToolsIcon from '../assets/sections-icon/tools-icon.png';

// Icons
import { ClipboardCheckIcon } from '@heroicons/react/outline';
import { MusicNoteIcon } from '@heroicons/react/outline';
import { CurrencyRupeeIcon } from '@heroicons/react/outline';
import { PuzzleIcon } from '@heroicons/react/outline';

const details = {
  icon: ToolsIcon,
  title: 'Tools',
  subTitle: 'Tools we love',
  description:
    ' We love to design and develop good products. Taking inspiration from different great products out there, Eventually, We decided that it would be a fun challenge to try designing and building our own. Building products that are great on both performance and experience aspect.',
  linkText: 'See more',
  to: '/projects',
};

const colors = {
  primary: 'text-sky-500',
  linkBg: 'bg-sky-50',
  linkText: 'text-sky-600',
  linkHoverBg: 'hover:bg-sky-100',
  linkHoverText: 'hover:text-sky-700',
  chevron: 'text-sky-300',
  chevronHover: 'group-hover:text-sky-400',
};

const SectionTools = () => {
  return (
    <section className='pt-20 md:pt-40'>
      <div className='container mx-auto'>
        <SectionHeader section={details} colors={colors} />
      </div>
    </section>
  );
};

export default SectionTools;

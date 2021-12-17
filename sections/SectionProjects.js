// components
import SectionHeader from '../components/SectionHeader';
import SectionTabs from '../components/SectionTabs';

// Icons
import ProjectsIcons from '../assets/sections-icon/projects-icon.png';
import { ClipboardCheckIcon } from '@heroicons/react/outline';
import { MusicNoteIcon } from '@heroicons/react/outline';
import { CurrencyRupeeIcon } from '@heroicons/react/outline';
import { PuzzleIcon } from '@heroicons/react/outline';

// Images
import ProjectManagement from '../assets/projects/project-management.png';
import MusicPlayer from '../assets/projects/music-player.png';
import ExpenseTracker from '../assets/projects/expense-tracker.png';
import MemoryGame from '../assets/projects/memory-game.png';

const details = {
  icon: ProjectsIcons,
  title: 'Projects',
  subTitle: 'Some of the projects we built.',
  description:
    ' We love to design and develop good products. Taking inspiration from different great products out there, Eventually, We decided that it would be a fun challenge to try designing and building our own. Building products that are great on both performance and experience aspect.',
  linkText: 'See more',
  to: '/projects',
};

const colors = {
  primary: 'text-indigo-500',
  linkBg: 'bg-indigo-50',
  linkText: 'text-indigo-600',
  linkHoverBg: 'hover:bg-indigo-200',
  linkHoverText: 'hover:text-indigo-700',
  chevron: 'text-indigo-300',
  chevronHover: 'group-hover:text-indigo-400',
};

const projects = [
  {
    name: 'Project',
    icon: <ClipboardCheckIcon />,
    to: 'https://theemployedhumans.web.app/',
    img: ProjectManagement,
  },
  {
    name: 'Music',
    icon: <MusicNoteIcon />,
    to: 'https://wavesmusic-atomicprogrammers.netlify.app/',
    img: MusicPlayer,
  },
  {
    name: 'Expense',
    icon: <CurrencyRupeeIcon />,
    to: 'https://mymoney-byap.web.app/',
    img: ExpenseTracker,
  },
  {
    name: 'Memory',
    icon: <PuzzleIcon />,
    to: 'https://memorygamebyap.netlify.app/',
    img: MemoryGame,
  },
];

const SectionProjects = () => {
  return (
    <section className='pt-20 md:pt-40'>
      <div className='container mx-auto'>
        <SectionHeader section={details} colors={colors} />
      </div>
      <SectionTabs projects={projects} />
    </section>
  );
};

export default SectionProjects;

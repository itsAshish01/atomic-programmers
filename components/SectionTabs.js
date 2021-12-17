// Icons
import { ClipboardCheckIcon } from '@heroicons/react/outline';
import { MusicNoteIcon } from '@heroicons/react/outline';
import { CurrencyRupeeIcon } from '@heroicons/react/outline';
import { PuzzleIcon } from '@heroicons/react/outline';

// Images
import ProjectManagement from '../assets/projects/project-management.png';
import MusicPlayer from '../assets/projects/music-player.png';
import ExpenseTracker from '../assets/projects/expense-tracker.png';
import MemoryGame from '../assets/projects/memory-game.png';

// headless ui
import { Tab } from '@headlessui/react';

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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const SectionTabs = () => {
  return (
    <div className='mt-10'>
      <Tab.Group>
        <div className='flex overflow-auto container mx-auto md:px-8'>
          <Tab.List
            className='flex-none inline-grid gap-x-2 px-4 sm:px-0 xl:gap-x-6'
            style={{ gridTemplateColumns: 'repeat(4, minmax(6rem, 1fr)' }}
          >
            {projects.map((project) => (
              <Tab
                key={project}
                className={({ selected }) =>
                  classNames(
                    'group text-sm font-semibold w-full flex flex-col items-center gap-6',
                    selected ? 'text-indigo-500' : ''
                  )
                }
              >
                <div className='h-12 w-12 heroicon-sw-1 text-gray-300 group-hover:text-gray-400'>
                  {project.icon}
                </div>
                {project.name}
              </Tab>
            ))}
          </Tab.List>
        </div>
      </Tab.Group>

      <div className=''></div>
    </div>
  );
};

export default SectionTabs;

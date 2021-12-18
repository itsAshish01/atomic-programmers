// components
import SectionHeader from '../components/SectionHeader';
import SectionTabs from '../components/SectionTabs';
import DesignTabs from '../Tabs/DesignTabs';

// Logo
import ToolsIcon from '../assets/sections-icon/tools-icon.png';

// Icons
import { CodeIcon } from '@heroicons/react/outline';
import { ServerIcon } from '@heroicons/react/outline';
import { PencilIcon } from '@heroicons/react/outline';
import { PuzzleIcon } from '@heroicons/react/outline';

// Frontend
import Logo1 from '../assets/tools/tools-frontend/html.png';
import Logo2 from '../assets/tools/tools-frontend/css.png';
import Logo3 from '../assets/tools/tools-frontend/tailwind.png';
import Logo4 from '../assets/tools/tools-frontend/js.png';
import Logo5 from '../assets/tools/tools-frontend/react.png';
import Logo6 from '../assets/tools/tools-frontend/next.png';

const tools = [
  {
    name: 'Frontend',
    icon: <CodeIcon />,
    imgs: [
      { url: Logo1, alt: 'HTML' },
      { url: Logo2, alt: 'CSS' },
      { url: Logo3, alt: 'Tailwind' },
      { url: Logo4, alt: 'Javascript' },
      { url: Logo5, alt: 'React' },
      { url: Logo6, alt: 'Next' },
    ],
  },
  {
    name: 'Backend',
    icon: <ServerIcon />,
    imgs: [
      { url: Logo1, alt: 'HTML' },
      { url: Logo2, alt: 'CSS' },
      { url: Logo3, alt: 'Tailwind' },
      { url: Logo4, alt: 'Javascript' },
      { url: Logo5, alt: 'React' },
      { url: Logo6, alt: 'Next' },
    ],
  },
  {
    name: 'Design',
    icon: <PencilIcon />,
    imgs: [
      { url: Logo1, alt: 'HTML' },
      { url: Logo2, alt: 'CSS' },
      { url: Logo3, alt: 'Tailwind' },
      { url: Logo4, alt: 'Javascript' },
      { url: Logo5, alt: 'React' },
      { url: Logo6, alt: 'Next' },
    ],
  },
  {
    name: 'Frontend',
    icon: <CodeIcon />,
    imgs: [
      { url: Logo1, alt: 'HTML' },
      { url: Logo2, alt: 'CSS' },
      { url: Logo3, alt: 'Tailwind' },
      { url: Logo4, alt: 'Javascript' },
      { url: Logo5, alt: 'React' },
      { url: Logo6, alt: 'Next' },
    ],
  },
];

const details = {
  icon: ToolsIcon,
  title: 'Tools',
  subTitle: 'Tools we love',
  description:
    '“We become what we behold. We shape our tools, and thereafter our tools shape us.” - Marshall McLuhan. Tools always plays an important role in an individaul professional life. Here are some of the tools we love and use for our work.',
  linkText: 'See more',
  to: '/tools',
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
      <SectionTabs
        color='text-sky-500'
        projects={tools}
        Component={DesignTabs}
      />
    </section>
  );
};

export default SectionTools;

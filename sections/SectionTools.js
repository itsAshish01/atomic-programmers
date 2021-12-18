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
import { BookOpenIcon } from '@heroicons/react/outline';

// Frontend
import Logo1 from '../assets/tools/tools-frontend/html.png';
import Logo2 from '../assets/tools/tools-frontend/css.png';
import Logo3 from '../assets/tools/tools-frontend/tailwind.png';
import Logo4 from '../assets/tools/tools-frontend/js.png';
import Logo5 from '../assets/tools/tools-frontend/react.png';
import Logo6 from '../assets/tools/tools-frontend/next.png';

// Backend
import Logo7 from '../assets/tools/tools-backend/firebase.png';
import Logo8 from '../assets/tools/tools-backend/nodejs.png';
import Logo9 from '../assets/tools/tools-backend/mongob.png';
import Logo10 from '../assets/tools/tools-backend/python.png';
import Logo11 from '../assets/tools/tools-backend/django.png';
import Logo12 from '../assets/tools/tools-backend/mysql.png';

// Design
import Logo13 from '../assets/tools/tools-design/figma.png';
import Logo14 from '../assets/tools/tools-design/illustrator.png';
import Logo15 from '../assets/tools/tools-design/photoshop.png';
import Logo16 from '../assets/tools/tools-design/canva.png';
import Logo17 from '../assets/tools/tools-design/lightroom.png';
import Logo18 from '../assets/tools/tools-design/aftereffects.png';

// Extra
import Logo19 from '../assets/tools/tools-extra/vscode.png';
import Logo20 from '../assets/tools/tools-extra/datagrip.png';
import Logo21 from '../assets/tools/tools-extra/netlify.png';
import Logo22 from '../assets/tools/tools-extra/vercel.png';
import Logo23 from '../assets/tools/tools-extra/udemy.png';
import Logo24 from '../assets/tools/tools-extra/youtube.png';

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
      { url: Logo7, alt: 'Figma' },
      { url: Logo8, alt: 'Illustrator' },
      { url: Logo9, alt: 'Photoshop' },
      { url: Logo10, alt: 'Canva' },
      { url: Logo11, alt: 'Lightroom' },
      { url: Logo12, alt: 'After effects' },
    ],
  },
  {
    name: 'Design',
    icon: <PencilIcon />,
    imgs: [
      { url: Logo13, alt: 'HTML' },
      { url: Logo14, alt: 'CSS' },
      { url: Logo15, alt: 'Tailwind' },
      { url: Logo16, alt: 'Javascript' },
      { url: Logo17, alt: 'React' },
      { url: Logo18, alt: 'Next' },
    ],
  },
  {
    name: 'Learning',
    icon: <BookOpenIcon />,
    imgs: [
      { url: Logo19, alt: 'VS Code' },
      { url: Logo20, alt: 'DataGrip' },
      { url: Logo21, alt: 'Netlify' },
      { url: Logo22, alt: 'Vercel' },
      { url: Logo23, alt: 'Udemy' },
      { url: Logo24, alt: 'Youtube' },
    ],
  },
];

const details = {
  icon: ToolsIcon,
  title: 'Tools',
  subTitle: 'Tools we love.',
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

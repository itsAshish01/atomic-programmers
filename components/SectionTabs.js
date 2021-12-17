// headless ui
import { Tab } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const SectionTabs = ({ projects, color, Component }) => {
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
                key={project.name}
                className={({ selected }) =>
                  classNames(
                    'group text-sm font-semibold w-full flex flex-col items-center gap-6',
                    selected ? `${color}` : ''
                  )
                }
              >
                <div className='h-12 w-12 heroicon-sw-1'>{project.icon}</div>
                {project.name}
              </Tab>
            ))}
          </Tab.List>
        </div>
        <Tab.Panels className='mt-10 bg-slate-50 flex justify-center py-10 px-6'>
          {projects.map((project) => (
            <Tab.Panel key={project.name}>
              <Component project={project} />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default SectionTabs;

// TODO: className=' text-gray-300 group-hover:text-gray-400'> */

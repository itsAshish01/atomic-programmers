export default function Example() {
  return (
    <div className='w-full max-w-screen px-2 py-16 sm:px-0'>
      <Tab.Group>
        <Tab.List className='flex p-1 space-x-1 bg-blue-900/20 rounded-xl'>
          {projects.map((project) => (
            <Tab
              key={project.id}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              <div className='h-12 w-12 text-teal-400'>{project.icon}</div>
              {project.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mt-2'>
          {projects.map((project) => (
            <Tab.Panel
              key={project.id}
              className={classNames(
                'bg-red-300 rounded-xl p-3 w-full',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
              )}
            >
              <Link href={project.to}>
                <a>
                  <Image src={project.img} alt={project.name} />
                </a>
              </Link>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

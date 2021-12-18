import Image from 'next/image';

const ProjectsTab = ({ collection }) => {
  return (
    <a href={collection.to} target='_blank' rel='noopener noreferrer'>
      <Image
        className='project-img rounded-lg'
        priority
        src={collection.img}
        alt={collection.name}
        width={1080}
        height={615}
      />
    </a>
  );
};

export default ProjectsTab;

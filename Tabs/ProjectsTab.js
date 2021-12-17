import Image from 'next/image';

const ProjectsTab = ({ collection }) => {
  return (
    <a href={collection.to} target='_blank' rel='noopener noreferrer'>
      <Image
        src={collection.img}
        alt={collection.name}
        width={1080}
        height={615}
        className='rounded-lg transition-all ease-out duration-300 hover:brightness-75 hover:scale-95'
      />
    </a>
  );
};

export default ProjectsTab;

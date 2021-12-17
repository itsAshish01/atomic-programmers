import Image from 'next/image';

const ProjectsTab = ({ project }) => {
  return (
    <a href={project.to} target='_blank' rel='noopener noreferrer'>
      <Image
        src={project.img}
        alt={project.name}
        width={1080}
        height={615}
        className='transition-all ease-out duration-300 hover:brightness-75 hover:scale-95'
      />
    </a>
  );
};

export default ProjectsTab;

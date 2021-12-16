import Image from 'next/image';

// social icons
import Twitter from '../assets/social/twitter.svg';
import Instagram from '../assets/social/instagram.svg';
import Linkedin from '../assets/social/linkedin.svg';

const TeamCard = ({ individual }) => {
  return (
    <figure className='bg-slate-50 rounded-lg p-6 flex flex-col-reverse xl:p-8'>
      <div className='flex gap-x-4 mt-6'>
        <a href={individual.twitter} target='_blank' rel='noopener noreferrer'>
          <Image
            height={36}
            width={36}
            className='hover:contrast-50'
            src={Twitter}
            alt='twitter logo'
          />
        </a>
        <a
          href={individual.instagram}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            height={36}
            width={36}
            className='hover:contrast-50'
            src={Instagram}
            alt='instagram logo'
          />
        </a>
        <a href={individual.linkedin} target='_blank' rel='noopener noreferrer'>
          <Image
            height={36}
            width={36}
            className='hover:contrast-50'
            src={Linkedin}
            alt='linkedin logo'
          />
        </a>
      </div>
      <blockquote className='mt-6 text-slate-700 font-light text-sm leading-6'>
        <p>{individual.description}</p>
      </blockquote>
      <figcaption className='flex items-center space-x-4'>
        <Image
          src={individual.image}
          width={56}
          height={56}
          alt={individual.name}
          className='rounded-full'
        />
        <div className='flex-auto'>
          <div className='text-slate-900 font-semibold'>{individual.name}</div>
          <div className='mt-0.5 text-sm font-light'>{individual.role}</div>
        </div>
      </figcaption>
    </figure>
  );
};

export default TeamCard;

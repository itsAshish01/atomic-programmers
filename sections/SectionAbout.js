// Components
import TeamCard from '../components/TeamCard';

// Team Images
import Ashish from '../assets/team/ashish-sharma.png';
import Shubham from '../assets/team/shubham-berlia.png';
import Subhojeet from '../assets/team/subhojeet-chowdhury.png';

const team = [
  {
    name: 'Ashish Sharma',
    role: 'Designer & Developer',
    image: Ashish,
    twitter: 'https://twitter.com/itsAshish01',
    instagram: 'https://www.instagram.com/ashish.sharma01/',
    linkedin: 'https://www.linkedin.com/in/itsashishsharma01/',
    description:
      'Ashish got into programming after his school teacher scolded him for being absolute zero in his MySQL class. He accidentally discovered Java and JavaScript when he was downloading paid courses for free from torrent. He Designs and write some codes. Ashish occasionally wins at Valorant by shooting from the back.',
  },
  {
    name: 'Shubham Berlia',
    role: 'Developer',
    image: Shubham,
    twitter: 'https://twitter.com/BerliaShubham/',
    instagram: 'https://www.instagram.com/shubham.berlia/',
    linkedin: 'https://www.linkedin.com/in/shubham-berlia-b45033219/',
    description:
      'Shubham got into programming like everybody in India does, Just after class X by reading a brilliant book on C++ by Sumitra Arrora. From that point he started making crappy C++ projects. He is the one who teaches DSA to everyone in the team and handles the Backend. He do not waste his precious time playing games.',
  },
  {
    name: 'Subhojeet Chowdhury',
    role: 'Developer',
    image: Subhojeet,
    twitter: 'https://twitter.com/subho12134/',
    instagram: 'https://www.instagram.com/_subhojeet121_/',
    linkedin: 'https://www.linkedin.com/in/subhojeet-chowdhury/',
    description:
      'Subhojeet got into programming after he realize that his class XII Physics & Chemistry do not even help 1% in his CSE degree. He accidentally discovered Python while he was surfing about How to clear GATE examination. He handles the Frontend. Subhojeet occasionally wins at Valorant by hiding and sniping from the base.',
  },
];

const SectionAbout = () => {
  return (
    <section className='container mt-12 mx-auto md:mt-16'>
      <div className=' px-8'>
        <h2 className='text-slate-900 text-4xl tracking-tight font-extrabold lg:text-5xl text-center'>
          Inside the atom
        </h2>
        <p className='mt-6 max-w-3xl mx-auto text-lg font-light  text-center'>
          Atomic programmers is alias to the{' '}
          <span className='text-sky-500 font-normal'>Atom</span>, the basic
          building block of the universe. In the logo the brain represents the
          nucleus and skills being the electrons. Atomic Programmers got
          discovered by three freinds in the year 2021 aiming nothing but
          starting just for the sake of starting something of there own. From
          that point onwards there&apos;s no looking back!
        </p>
      </div>
      <div className='mx-auto px-4 mt-20 grid grid-cols-1 gap-6 md:gap-12 lg:gap-8 lg:grid-cols-3 xl:px-5'>
        {team.map((ind) => (
          <TeamCard key={ind.name} individual={ind} />
        ))}
      </div>
    </section>
  );
};

export default SectionAbout;

import Image from 'next/image';

const WhyTabs = ({ collection }) => {
  return (
    <div
      className='container md:grid md:grid-cols-2 lg:gap-8 xl:'
      style={{ alignItems: 'center' }}
    >
      <p className='text-sm text-center px-6 md:text-left md:text-base lg:text-lg why-text'>
        {collection.text}
      </p>
      <Image
        priority
        src={collection.img}
        alt={collection.name}
        width={450}
        height={450}
      />
    </div>
  );
};

export default WhyTabs;

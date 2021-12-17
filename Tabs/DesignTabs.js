import Image from 'next/image';

const DesignTabs = ({ collection }) => {
  return (
    <div
      style={
        {
          // display: 'grid',
          // gridTemplateColumns: 'repeat(3, 1fr)',
          // gap: '2rem',
          // marginTop: '2.5rem',
          // marginBottom: '2.5rem',
        }
      }
    >
      {collection.imgs.map((img) => (
        <div
          className='rounded-lg'
          // style={{ background: 'white' }}
          key={img.alt}
        >
          <Image src={img.url} alt={img.alt} width={201} height={150} />
        </div>
      ))}
    </div>
  );
};

export default DesignTabs;

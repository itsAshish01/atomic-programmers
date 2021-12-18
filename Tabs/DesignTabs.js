import Image from 'next/image';

const DesignTabs = ({ collection }) => {
  return (
    <div className='section-grid'>
      {collection.imgs.map((img) => (
        <div className='group img-container rounded-lg' key={img.alt}>
          <Image src={img.url} alt={img.alt} width={201} height={150} />
        </div>
      ))}
    </div>
  );
};

export default DesignTabs;

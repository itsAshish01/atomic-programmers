import SectionHeader from '../components/SectionHeader';

// temp
import SectionTabs from '../components/SectionTabs';

const SectionProjects = () => {
  return (
    <section className='pt-20 md:pt-40'>
      <div className='container mx-auto'>
        <SectionHeader />
      </div>
      <SectionTabs />
    </section>
  );
};

export default SectionProjects;

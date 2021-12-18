// Logo
import MessageIcon from '../assets/sections-icon/message-icon.png';
import SectionHeader from '../components/SectionHeader';
import Form from '../components/Form';

const details = {
  icon: MessageIcon,
  title: 'Message',
  subTitle: 'Have a message?',
  description:
    'Thanks for taking the time to reach out. How can we help you today?',
  linkText: 'See more',
  to: '/message',
};

const colors = {
  primary: 'text-slate-500',
  linkBg: 'bg-slate-100',
  linkText: 'text-slate-700',
  linkHoverBg: 'hover:bg-slate-200',
  linkHoverText: 'hover:text-slate-900',
  chevron: 'text-slate-300',
  chevronHover: 'group-hover:text-slate-400',
};

const SectionMessage = () => {
  return (
    <section className='pt-20 md:pt-40'>
      <div className='container mx-auto'>
        <SectionHeader section={details} colors={colors} />
      </div>
      <div className='bg-slate-50 mt-10 py-8'>
        <Form />
      </div>
    </section>
  );
};

export default SectionMessage;

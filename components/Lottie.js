import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const Lottie = ({ name }) => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require(`../assets/lotties/${name}`),
    });
  }, [name]);
  return <div ref={container}></div>;
};

export default Lottie;

import React from 'react';
import { useInView } from 'react-intersection-observer';
import './animation.css'; // CSS file containing fade-in animations

const FadeInUp = ({ children, classname }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // When 10% of the component is visible
  });

  return (
    <div ref={ref} className={`${classname} ${inView ? 'fadeInUp' : 'fadeOutUp'}`}>
      {children}
    </div>
  );
};

export default FadeInUp;
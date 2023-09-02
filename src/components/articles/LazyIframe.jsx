import React, { useRef, useEffect, useState } from 'react';

const LazyIframe = ({ src, width = '100%', height = '356px' }) => {
  const iframeRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(iframeRef.current);
      }
    });
  };

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      handleIntersection,
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    intersectionObserver.observe(iframeRef.current);

    return () => {
      intersectionObserver.unobserve(iframeRef.current);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={isVisible ? src : ''}
      width={width}
      height={height}
      frameBorder="0"
      marginWidth="0"
      marginHeight="0"
      allowFullScreen
    ></iframe>
  );
};

export { LazyIframe };

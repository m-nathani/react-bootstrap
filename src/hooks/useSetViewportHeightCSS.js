import { useEffect } from 'react';
import debounce from 'lodash/debounce';

const useSetViewportHeightCSS = () => {
  useEffect(() => {
    const handleResize = () => {
      // vh in CSS doesn't give real height on mobile because of browser UI
      // Fixing it by setting a CSS variable with a more accurate value
      // In CSS use: calc(var(--webrms-vh, 1vh) * 100) instead of 100vh
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--webrms-vh', `${vh}px`);
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', debounce(handleResize, 400));

    return () => window.removeEventListener('resize', handleResize);
  }, []);
};

export default useSetViewportHeightCSS;

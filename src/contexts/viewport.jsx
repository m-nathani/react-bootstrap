/**
 * Note: Responsive viewport context designed to handle sizes with JS
 *       Moreover, it needs to be always synced with the media-queries defined in src/styles/global/_bulma-overrides.scss
 */
import React, { createContext, useEffect, useMemo, useState } from 'react';
import { debounce } from 'lodash';
import PropTypes from 'prop-types';

export const viewportBreakpoints = {
  phone: 361,
  tablet: 673,
  desktop: 1025,
  largeDesktop: 1408,
};

export const ViewportContext = createContext();

export const ViewportContextProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleWindowResize = useMemo(
    () =>
      debounce(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      }, 200),
    [setWidth, setHeight]
  );

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      if (handleWindowResize.cancel) {
        handleWindowResize.cancel();
      }
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);

  return (
    <ViewportContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        width,
        height,
        mobile: width < viewportBreakpoints.tablet,
        tabletAndAbove: width >= viewportBreakpoints.tablet,
        desktopAndAbove: width >= viewportBreakpoints.desktop,
        smallMobile: width <= viewportBreakpoints.phone,
        smallHeightMobile: height <= 600,
        largeDesktop: width >= viewportBreakpoints.largeDesktop,
        betweenTabletAndDesktop: width >= viewportBreakpoints.tablet && width < 1024,
      }}
    >
      {children}
    </ViewportContext.Provider>
  );
};

ViewportContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

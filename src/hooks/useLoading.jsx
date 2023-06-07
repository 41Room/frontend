import React, { createContext, useContext, useEffect, useState } from 'react';
import LOADING from '../images/loading.svg';

const LoadingContext = createContext(null);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('Cannot find LoadingContext');
  }
  return context;
};

const LoadingManager = ({ children }) => {
  /* Router */
  /* State */
  const [isLoading, setIsLoading] = useState(false);
  /* Functions */
  const handleLoading = (val = true) => {
    setIsLoading(val);
  };
  const handleLoadingTimer = (timer = 3000, callback = null) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (callback) {
        callback();
      }
    }, timer);
  };
  /* Hooks */
  /* Render */
  return (
    <LoadingContext.Provider
      value={{ isLoading, handleLoading, handleLoadingTimer }}
    >
      {children}
      {isLoading && (
        <div
          style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={LOADING} alt="loading" />
        </div>
      )}
    </LoadingContext.Provider>
  );
};

export default LoadingManager;

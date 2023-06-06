import React, { createContext, useContext, useEffect, useState } from 'react';
import { checkSession, getCookie, logout, setCookie } from '.';
import { useNavigate } from 'react-router-dom';

const SessionContext = createContext(null);

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('Cannot find SessionContext');
  }
  return context;
};

const SessionManager = ({ children }) => {
  /* Router */
  const navigate = useNavigate();
  /* State */
  const [isSession, setIsSession] = useState(false);
  const [session, setSession] = useState(null);
  /* Functions */
  const handleSession = (val) => {
    try {
      if (!val) {
        throw new Error('Session is null');
      }
      setSession(val);
      setIsSession(true);
      setCookie('41ROOM', JSON.stringify(val), 1);
      return true;
    } catch (error) {
      return false;
    }
  };

  const handleLogout = () => {
    logout();
    location.reload();
  };
  /* Hooks */
  useEffect(() => {
    if (session) {
      return;
    }
    if (!checkSession()) {
      navigate('/signin');
    }
    const sess = JSON.parse(getCookie('41ROOM'));
    handleSession(sess);
  }, [session]);

  /* Render */
  return (
    <SessionContext.Provider
      value={{
        isSession,
        handleSession,
        session,
        logout: handleLogout,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionManager;

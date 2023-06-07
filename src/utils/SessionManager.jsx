import React, { createContext, useContext, useEffect, useState } from 'react';
import { checkSession, getCookie, logout, setCookie } from '.';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAccount, useConnect, useDisconnect, useNetwork } from 'wagmi';
import { useSwitchNetwork } from 'wagmi';
// import { switchNetwork } from '@wagmi/core';

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
  const { connect, connectors } = useConnect();
  const { isConnected, address, connector } = useAccount();
  const network = useSwitchNetwork();
  const { disconnect } = useDisconnect();

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

  const checkMetamask = async (addr) => {
    const [metamask] = connectors;
    connect({ connector: metamask });
  };

  const handleLogout = () => {
    logout();
    if (isConnected) {
      disconnect();
    }
    navigate('/signin');
    location.reload();
  };

  /* Hooks */
  useEffect(() => {
    checkMetamask();
    if (session) {
      return;
    }
    if (!checkSession()) {
      // 회원가입 화면전환 필요함
      // navigate('/signin');
    }
    const sess = JSON.parse(getCookie('41ROOM'));
    handleSession(sess);
  }, [session]);

  useEffect(() => {
    console.log(address);
  }, [isConnected]);

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

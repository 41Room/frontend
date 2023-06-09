import React, { createContext, useContext, useEffect, useState } from 'react';
import { checkSession, getCookie, logout, setCookie } from '.';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAccount, useConnect, useDisconnect, useNetwork } from 'wagmi';
import {} from 'wagmi';
import { Web3API } from 'api';
// import { switchNetwork } from '@wagmi/core';

const SessionContext = createContext(null);

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('Cannot find SessionContext');
  }
  return context;
};

const WHITE_LIST = ['signin', 'signup'];

const SessionManager = ({ children }) => {
  /* Router */
  const navigate = useNavigate();
  const { pathname } = useLocation();
  /* State */
  const [isSession, setIsSession] = useState(false);
  const [session, setSession] = useState(null);
  const { connect, connectors } = useConnect();
  const { chains } = useNetwork();
  const { isConnected, address, connector } = useAccount();
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
      checkMetamask(val);

      return true;
    } catch (error) {
      return false;
    }
  };

  const checkMetamask = async (s) => {
    const [metamask] = connectors;
    connect({ connector: metamask });
    await handleBalance(s);
  };

  const handleLogout = () => {
    logout();
    if (isConnected) {
      disconnect();
    }
    navigate('/signin');
    location.reload();
  };

  const handleBalance = async (val) => {
    const result = await Web3API.getTokenBalance(val.wallet_id);
    if (result) {
      setSession({ ...val, balance: result * Math.pow(10, 18) });
      return true;
    }
    return false;
  };

  /* Hooks */
  useEffect(() => {
    if (session) {
      return;
    }
    if (!checkSession()) {
      const cond = WHITE_LIST.some((item) => pathname.includes(item));
      if (!cond) {
        // 회원가입 화면전환 필요함
        navigate('/signin');
      }
    }
    const sess = JSON.parse(getCookie('41ROOM'));
    handleSession(sess);
  }, [session]);

  useEffect(() => {}, [isConnected]);

  /* Render */
  return (
    <SessionContext.Provider
      value={{
        isSession,
        handleSession,
        session,
        logout: handleLogout,
        handleBalance,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionManager;

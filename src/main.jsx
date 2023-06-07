import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import SessionManager from './utils/SessionManager';
import './global';

import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WagmiConfig, createConfig, configureChains, sepolia } from 'wagmi';
import { API_KEY } from './utils';
import LoadingManager from './hooks/useLoading';

const { chains, publicClient } = configureChains(
  [sepolia],
  [infuraProvider({ apiKey: API_KEY }), publicProvider()]
);

const connector = new MetaMaskConnector({
  chains: chains,
});

const config = createConfig({
  autoConnect: true,
  publicClient,
  connectors: [connector],
});

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Router>
    <WagmiConfig config={config}>
      <LoadingManager>
        <SessionManager>
          <App />
        </SessionManager>
      </LoadingManager>
    </WagmiConfig>
  </Router>
  // </React.StrictMode>
);

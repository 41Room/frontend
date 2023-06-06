import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import SessionManager from './utils/SessionManager';
import './global';

import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import {
  WagmiConfig,
  createConfig,
  configureChains,
  mainnet,
  sepolia,
} from 'wagmi';
import { API_KEY } from './utils';

const { chains, publicClient } = configureChains(
  [mainnet, sepolia],
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
    <SessionManager>
      <WagmiConfig config={config}>
        <App />
      </WagmiConfig>
    </SessionManager>
  </Router>
  // </React.StrictMode>
);

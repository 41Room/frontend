import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const { VITE_API_KEY } = import.meta.env;

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

const { chains, publicClient } = configureChains(
  [mainnet, sepolia],
  [infuraProvider({ apiKey: VITE_API_KEY }), publicProvider()]
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
  <WagmiConfig config={config}>
    <Router>
      <App />
    </Router>
  </WagmiConfig>
  // </React.StrictMode>
);

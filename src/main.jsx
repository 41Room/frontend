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
import PlantManager from './utils/PlantManager';

const _41room = {
  id: 4777,
  name: '41Room',
  network: '41room',
  nativeCurrency: {
    decimals: 18,
    name: '41Room',
    symbol: '41R',
  },
  rpcUrls: {
    public: { http: ['https://rpc.ongdv.dev'] },
    default: { http: ['https://rpc.ongdv.dev'] },
  },
};

console.log(_41room);

const { chains, publicClient } = configureChains(
  [sepolia, _41room],
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
          <PlantManager>
            <App />
          </PlantManager>
        </SessionManager>
      </LoadingManager>
    </WagmiConfig>
  </Router>
  // </React.StrictMode>
);

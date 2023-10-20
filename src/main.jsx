import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//web3
import {
  lightTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, WagmiConfig, createConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai],
  [alchemyProvider({ apiKey: "YimPXScQsODoFeNE0wE3m-EUbpdHam03" })]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: 'f54e46429bf85e36ac93711c9525972f',
  chains,
});

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <RainbowKitProvider
        chains={chains}
        theme={lightTheme({
          accentColor: "#56ba63",
          accentColorForeground: "white",
          borderRadius: "medium",
          fontStack: "system",
        })}
      >
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>,
)

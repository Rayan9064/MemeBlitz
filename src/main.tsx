import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TonConnectUIProvider } from '@tonconnect/ui-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TonConnectUIProvider manifestUrl="https://localhost:5173/tonconnect-manifest.json">
      <App />
    </TonConnectUIProvider>
  </StrictMode>
);

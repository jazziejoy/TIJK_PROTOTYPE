import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import { BrowserRouter } from "react-router-dom";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from 'web3uikit';

Modal.setAppElement("#root");

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider 
      appId="9WE8oRI00EZoq1aS2UfJ3C1dBKpzT2BLJa8SPj2Q" 
      serverUrl="https://wb50gi2tvtjn.usemoralis.com:2053/server">
      <NotificationProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </NotificationProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

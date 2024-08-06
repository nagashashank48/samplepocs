import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MsalProvider } from '@azure/msal-react';
import { Configuration, PublicClientApplication } from "@azure/msal-browser";
const configuration: Configuration = {
  auth: {
      clientId:'c1c76223-cf1d-4eab-b9a8-3e325c22a117' ,
      authority: 'https://login.microsoftonline.com/4c2aaa0d-7f65-4d8f-ba0a-bc7db41908fb'
  }
};
const pca = new PublicClientApplication(configuration);
pca.initialize();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <MsalProvider instance={pca}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </MsalProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

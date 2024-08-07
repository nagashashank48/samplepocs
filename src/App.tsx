import React from 'react';
import './App.css';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <>
    <UnauthenticatedTemplate>
      <Login/>
    </UnauthenticatedTemplate>
    <AuthenticatedTemplate>
      <Dashboard/>
    </AuthenticatedTemplate>
    </>
  );
}

export default App;

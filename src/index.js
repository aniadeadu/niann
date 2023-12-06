import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ModalsProvider } from './contexts/ModalsProvider';
import { FormProvider } from './contexts/FormProvider';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalsProvider>
        <FormProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </FormProvider>
      </ModalsProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

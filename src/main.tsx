import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import App from './App';

import StoreProvider from 'context/storeContext';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreProvider>
    <App />
    <ToastContainer position="top-right" autoClose={5000} />
  </StoreProvider>
);

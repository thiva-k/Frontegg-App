
import ReactDOM from 'react-dom'; // For react 17
// For react 18: import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: '', //add your baseUrl here
  clientId: '' //add your clientId here
};


const authOptions = {
 // keepSessionAlive: true // Uncomment this in order to maintain the session alive
};

// For react 18: 
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
    <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true} authOptions={authOptions}>
        <App />
    </FronteggProvider>,
    document.getElementById('root')
);
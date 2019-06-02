import * as React from 'react';
import { render } from 'react-dom';
import './styles/index.global.css';
import Root from './components/Root';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Still need to configure workbox
  navigator.serviceWorker.register('/service-worker.js');
    // .then(registration => console.log('SW registered: ', registration))
    // .catch(registrationError => console.log('SW registration failed: ', registrationError));
  });
}

render(<Root />, document.getElementById('app'));
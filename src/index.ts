import * as React from 'react';
import { render } from 'react-dom';
import { join } from 'lodash';
import derp from './derp';
import print from './print';
// import './styles/index.global.css';

function component() {
  const element = document.createElement('div');
   const button = document.createElement('button');
   const br = document.createElement('br');

  button.innerHTML = 'Click me and look at the do consolfe!';
  element.innerHTML = join(['Hello', 'webpack'], ' ');
   element.appendChild(br);
   element.appendChild(button);

   // Note that because a network request is involved, some indication
   // of loading would need to be shown in a production-level site/app.
   button.onclick = e => import(/* webpackChunkName: "derp" */ './derp').then(module => {
     const derp = module.default;

     derp();
   });

  return element;
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
  navigator.serviceWorker.register('/service-worker.js');
    // .then(registration => console.log('SW registered: ', registration))
    // .catch(registrationError => console.log('SW registration failed: ', registrationError));
  });
}

document.body.appendChild(component());

// render(<div>Hello World again and again</div>, document.getElementById('app'));
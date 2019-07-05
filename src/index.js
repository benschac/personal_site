import React from 'react';
import { render } from 'react-dom';

import './index.css';

class Hello {
  world() {
    console.log('this is the world');
  }
}

render(<div>Hello world</div>, document.getElementById('app'));
import React from 'react';
import {render} from 'react-dom';
import derp from './derp';
import './styles/index.global.css';

class Benjamin {
  hello() {
    console.log(derp());
  }
}

const ben = new Benjamin();

ben.hello();

render(<div>Hello World again and again</div>, document.getElementById('app'));
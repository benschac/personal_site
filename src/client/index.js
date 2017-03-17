import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './components/App.jsx';
import Layout from './components/Layout.jsx';
import Route, {IndexRoute} from 'react-router';


const routes = (
    <Route path="/" component={Layout}>
        
    </Route>
)

render(<App />, document.getElementById('root'));
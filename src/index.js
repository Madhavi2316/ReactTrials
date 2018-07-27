import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MultipleApp from './multipleExports/MultipleApp';
import RefApp from './refExample/RefApp';
import JsonApp from './JsonCall/JsonApp';
import SeconJson from './JsonCall/SeconJson.json';
import SimpleMathApp from './SimpleMath/SimpleMathApp';

ReactDOM.render(<SimpleMathApp />, document.getElementById('root'));
registerServiceWorker();

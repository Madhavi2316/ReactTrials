import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MultipleApp from './multipleExports/MultipleApp';
import RefApp from './refExample/RefApp';

ReactDOM.render(<MultipleApp />, document.getElementById('root'));
registerServiceWorker();

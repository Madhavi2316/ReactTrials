import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MultipleApp from './multipleExports/MultipleApp';

ReactDOM.render(<MultipleApp />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MultipleApp from './multipleExports/MultipleApp';
import RefApp from './refExample/RefApp';
import JsonApp from './JsonCall/JsonApp';
import SeconJson from './JsonCall/SeconJson.json';
import SimpleMathApp from './SimpleMath/SimpleMathApp';
import store from './ReduxSample/Store/configureStore'; 
import CounterAppConatiner from './ReduxSample/Containers/CounterAppContainer';

ReactDOM.render(
    <Provider store={store} >
        <CounterAppConatiner />
    </Provider>,
 document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MultipleApp from './multipleExports/MultipleApp';
import RefApp from './refExample/RefApp';
import JsonApp from './JsonCall/JsonApp';
import SeconJson from './JsonCall/SeconJson.json';

ReactDOM.render(<div><JsonApp /> <ul>{
                 SeconJson.map(sec=><li>{sec.name} - {sec.created} - <ul><li>{sec.films[0]}<br/></li></ul></li>)}</ul>
</div>, document.getElementById('root'));
registerServiceWorker();

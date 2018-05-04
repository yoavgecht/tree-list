import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import List from './components/List';
import data from './data'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<List list={data}/>, document.getElementById('root'));
registerServiceWorker();

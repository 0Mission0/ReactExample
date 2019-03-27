import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ModalExample } from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ModalExample buttonLabel='Click Me' />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Redux
import storeRedux from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.Fragment>
    <Provider store={storeRedux}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

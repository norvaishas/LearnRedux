import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducer';
import App from './components/app';

const store = createStore(reducer);

ReactDOM.render(
  // Провайдер с помощью Context API делает store доступным в любом компоненте приложения
  <Provider store={store}>
      <App/>
  </Provider>,
  document.getElementById('root')
);

// Так же, провайдер сам следит за обновлением стора и обновляет приложение как только стейт изменился

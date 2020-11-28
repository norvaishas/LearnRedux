import {createStore, bindActionCreators} from 'redux';
import reducer from './reducer';
import {inc, dec, rnd} from './actions';

const store = createStore(reducer);
const { dispatch } = store;

// Можно передать объект функций, вернется тоже объект но уже из обернутых функций, их можно будет деструктурирровть
const {incDispatch, decDispatch, rndDispatch} = bindActionCreators({
    incDispatch: inc,
    decDispatch: dec,
    rndDispatch: rnd
}, dispatch);

document
  .getElementById('inc')
  .addEventListener('click', incDispatch);

document
  .getElementById('dec')
  .addEventListener('click', decDispatch);

document
  .getElementById('rnd')
  .addEventListener('click', () => {
      const payload = Math.floor(Math.random() * 10);
      rndDispatch(payload);
  });

const update = () => {
    document.getElementById('counter')
      .innerHTML = store.getState();
}

store.subscribe(update);

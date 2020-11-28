import {createStore} from 'redux';

const reducer = (state = 0, action) => {
    // state - текущий стейт
    // action - действие выполняемое над стейтом
    if (action.type === 'INC') {
        return state + 1;
    }
    switch (action.type) {
        case 'INC':
            return state + 1;

        case 'DEC':
            return state - 1;

        // Если значение из action.type не распознано, вернуть state без изменений
        default:
            return state;
    }
};

const store = createStore(reducer);

// Подписаться на обновления стора
store.subscribe(() => {
    console.log(
      // Получение текущего стейта
      store.getState()
    );
})

// Обработка новых actions
store.dispatch({type: 'INC'}); // 1
store.dispatch({type: 'INC'}); // 2
store.dispatch({type: 'QWERTY'}); // 2
store.dispatch({type: 'DEC'}); // 1

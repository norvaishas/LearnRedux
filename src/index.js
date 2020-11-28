
const reducer = (state = 0, action) => {
    // state - текущий стейт
    // action - действие выполняемое над стейтом
    if (action.type === 'INC') {
        return state + 1;
    }
    switch (action.type) {
        case 'INC':
            return state + 1;

        // Если значение из action.type не распознано, вернуть state без изменений
        default:
            return state;
    }
};

let state = reducer( undefined, {} ); // Инициализация стейта - action специально пустой чтоб попасть в default
state = reducer(state, { type: 'INC' });
console.log(state);

state = reducer(state, { type: 'INC' });
console.log(state);

const reducer = (state = 0, action) => {
    // state - текущий стейт
    // action - действие выполняемое над стейтом
    switch (action.type) {
        case 'INC':
            return state + 1;

        case 'DEC':
            return state - 1;

        case 'RND':
            return state + action.payload;

      // Если значение из action.type не распознано, вернуть state без изменений
        default:
            return state;
    }
};

export default reducer;

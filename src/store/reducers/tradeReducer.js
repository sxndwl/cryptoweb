const defaultState = {
    trades: []
}

export const tradeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TRADE':
            return { ...state, trades: [action.payload, ...state.trades.slice(0, 3)] };
        case 'CLEAR_TRADES':
            return { ...state, trades: [] };
        default:
            return state;
    }
}
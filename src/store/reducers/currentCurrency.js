const defaultState = {
    name: 'BTCUSDT',
    value: [],
    trades: []
}

export const currentCurrency = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_CURRENT':
            return { ...state, name: action.payload, value: [], trades: [] }
        case 'ADD_VALUE':
            return { ...state, value: [action.payload] }     
        case 'ADD_TRADES':
            return { ...state, trades: [action.payload, ...state.trades.slice(0, 3)] }   
        default:
            return state
    }
}
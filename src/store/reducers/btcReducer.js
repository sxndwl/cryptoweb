const defaultState = {
    btc: [],
}

export const btcReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_BTC':
            return { ...state, btc: [action.payload] }
        default:
            return state
    }
}
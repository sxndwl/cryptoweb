const defaultState = {
    btc: [],
    // isPriceGoingUp: null
}

export const btcReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_BTC':
            return { ...state, btc: [action.payload] }
        default:
            return state
    }
}
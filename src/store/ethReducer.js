const defaultState = {
    eth: [],
    // isPriceGoingUp: null
}

export const ethReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_ETH':
            return { ...state, eth: [action.payload] }
        default:
            return state
    }
}
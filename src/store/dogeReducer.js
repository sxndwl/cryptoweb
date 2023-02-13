const defaultState = {
    doge: [],
    // isPriceGoingUp: null
}

export const dogeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_DOGE':
            return { ...state, doge: [action.payload] }
        default:
            return state
    }
}
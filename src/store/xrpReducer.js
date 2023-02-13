const defaultState = {
    xrp: [],
    // isPriceGoingUp: null
}

export const xrpReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_XRP':
            return { ...state, xrp: [action.payload] }
        default:
            return state
    }
}
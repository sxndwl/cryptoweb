const defaultState = {
    dash: [],
    // isPriceGoingUp: null
}

export const dashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_DASH':
            return { ...state, dash: [action.payload] }
        default:
            return state
    }
}
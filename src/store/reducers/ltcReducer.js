const defaultState = {
    ltc: [],
}

export const ltcReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_LTC':
            return { ...state, ltc: [action.payload] }
        default:
            return state
    }
}
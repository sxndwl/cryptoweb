const defaultState = {
    name: 'BTCUSDT',
    value: [],
    graph: []
}

export const currentCurrency = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_CURRENT':
            return { ...state, name: action.payload }
        case 'ADD_VALUE':
            return { ...state, value: [action.payload] }    
        case 'ADD_GRAPH':
            return { ...state, graph: [action.payload] }     
        default:
            return state
    }
}
const defaultState = {
    theme: 'dark'
};

export const themeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_THEME':
            return {...state, theme: action.payload}
        default:
            return state
    }
}
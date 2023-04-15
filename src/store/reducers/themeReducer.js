const getThemeFromLocalStorage = () => {
    const theme = localStorage.getItem('theme');
    return theme ? theme : 'light';
};

const defaultState = {
    theme: getThemeFromLocalStorage()
};

export const themeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_THEME':
            return { ...state, theme: action.payload }
        default:
            return state
    }
}
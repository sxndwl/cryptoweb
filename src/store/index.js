import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { btcReducer } from './reducers/btcReducer'
import { ethReducer } from './reducers/ethReducer'
import { dashReducer } from './reducers/dashReducer'
import { dogeReducer } from './reducers/dogeReducer'
import { ltcReducer } from './reducers/ltcReducer'
import { xrpReducer } from './reducers/xrpReducer'
import { currentCurrency } from './reducers/currentCurrency'
import { tradeReducer } from './reducers/tradeReducer'
import { themeReducer } from './reducers/themeReducer'

const rootReducer = combineReducers({
    btc: btcReducer,
    eth: ethReducer,
    ltc: ltcReducer,
    xrp: xrpReducer,
    dash: dashReducer,
    doge: dogeReducer,
    current: currentCurrency,
    trade: tradeReducer,
    theme: themeReducer
})

export const store = createStore(rootReducer, composeWithDevTools())
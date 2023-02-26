import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { btcReducer } from './reducers/btcReducer'
import { ethReducer } from './reducers/ethReducer'
import { dashReducer } from './reducers/dashReducer'
import { dogeReducer } from './reducers/dogeReducer'
import { ltcReducer } from './reducers/ltcReducer'
import { xrpReducer } from './reducers/xrpReducer'
import { currentCurrency } from './reducers/currentCurrency'

const rootReducer = combineReducers({
    btc: btcReducer,
    eth: ethReducer,
    ltc: ltcReducer,
    xrp: xrpReducer,
    dash: dashReducer,
    doge: dogeReducer,
    current: currentCurrency
})

export const store = createStore(rootReducer, composeWithDevTools())
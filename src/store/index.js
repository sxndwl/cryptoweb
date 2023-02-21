import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { btcReducer } from './btcReducer'
import { ethReducer } from './ethReducer'
import { dashReducer } from './dashReducer'
import { dogeReducer } from './dogeReducer'
import { ltcReducer } from './ltcReducer'
import { xrpReducer } from './xrpReducer'
import { currentCurrency } from './currentCurrency'

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
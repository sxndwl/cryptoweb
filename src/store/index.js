import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { btcReducer } from './btcReducer'
import { ethReducer } from './ethReducer'
import { dashReducer } from './dashReducer'
import { dogeReducer } from './dogeReducer'
import { ltcReducer } from './ltcReducer'
import { xrpReducer } from './xrpReducer'

const rootReducer = combineReducers({
    btc: btcReducer,
    eth: ethReducer,
    ltc: ltcReducer,
    xrp: xrpReducer,
    dash: dashReducer,
    doge: dogeReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())
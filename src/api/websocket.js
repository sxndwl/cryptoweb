export const multiSocket = (valutes) => {
  return new WebSocket(`wss://stream.binance.com:443/ws/` + valutes.join('/'))
}

export const currentSocket = (valute) => {
  return new WebSocket(`wss://stream.binance.com:443/ws/${valute.toLowerCase()}@ticker`)
}

export const klineSocket = (valute) => {
  return new WebSocket(`wss://stream.binance.com:443/ws/${valute.toLowerCase()}@kline_1m`)
}

export const tradeSocket = (valute) => {
  return new WebSocket(`wss://stream.binance.com:443/ws/${valute.toLowerCase()}@trade`)
}
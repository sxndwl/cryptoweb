export const multiSocket = (valutes) => {
  return new WebSocket(`wss://stream.binance.com:9443/ws/` + valutes.join('/'))
}
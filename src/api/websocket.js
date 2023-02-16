export const multiSocket = (valutes) => {
  return new WebSocket(`wss://stream.binance.com:443/ws/` + valutes.join('/'))
}
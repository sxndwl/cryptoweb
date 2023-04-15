import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { tradeSocket } from './websocket'

const useTrade = (valute) => {
    const dispatch = useDispatch()

    const ws = useRef(null)

    useEffect(() => {
        ws.current = tradeSocket(valute)
        ws.current.onmessage = (event) => {
            const value = JSON.parse(event.data)
            const time = value.E / 1000
            const utcDate = new Date(time * 1000)
            
            const localDate = new Date(
                utcDate.toLocaleString("en-US", { timeZone: "Europe/Moscow" })
            )

            const hours = localDate.getHours().toString().padStart(2, "0")
            const minutes = localDate.getMinutes().toString().padStart(2, "0")
            const seconds = localDate.getSeconds().toString().padStart(2, "0")

            const formattedTime = `${hours}:${minutes}:${seconds}`;

            const sortData = {
                id: value.t, time: formattedTime, type: value.m, price: Number(value.p), amount: Number(value.q)
            }

            dispatch({
                type: 'ADD_TRADES',
                payload: sortData
            })
        }
        return () => {
            if (ws.current) {
                ws.current.close()
            }
        }
    }, [ws, valute, dispatch])
}

export default useTrade
import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { tradeSocket } from './websocket'

const useTrade = (valute) => {
    const [isPaused, setIsPaused] = useState(false)
    const [status, setStatus] = useState(valute)
    const dispatch = useDispatch()
    const ws = useRef(null)

    if (status !== valute) {
        setIsPaused(true)
        setStatus(valute)
    }

    useEffect(() => {
        if (!isPaused) {
            ws.current = tradeSocket(valute)
            ws.current.onmessage = (event) => {
                const value = JSON.parse(event.data)
                console.log(value)
            }
        } else {
            ws.current.close()
            setIsPaused(false)
        }
        // eslint-disable-next-line
    }, [ws, isPaused, valute])
}

export default useTrade
import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { klineSocket } from './websocket'

const useKline = (valute) => {
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
            ws.current = klineSocket(valute)
            ws.current.onmessage = (event) => {
                const value = JSON.parse(event.data)

                const sortData = {
                    time: value.E / 1000, value: Number(value.k.c)
                }

                dispatch({
                    type: 'ADD_GRAPH',
                    payload: sortData
                })
            }
        } else {
            ws.current.close()
            setIsPaused(false)
        }
        // eslint-disable-next-line
    }, [ws, isPaused, valute])
}

export default useKline
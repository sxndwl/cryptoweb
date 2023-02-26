import { useEffect, useState, useRef } from 'react';
import { currentSocket } from './websocket';
import { useDispatch } from 'react-redux';

const useCurrent = (valute) => {
    const dispatch = useDispatch()
    const [isPaused, setIsPaused] = useState(false)
    const [status, setStatus] = useState(valute)
    const ws = useRef(null)
    
    if (status !== valute) {
        setIsPaused(true)
        setStatus(valute)
    }
    useEffect(() => {
        if (!isPaused) {
            ws.current = currentSocket(valute) 
            ws.current.onmessage = (event) => {
                const value = JSON.parse(event.data)
                dispatch({
                    type: 'ADD_VALUE',
                    payload: value
                })
            }
        }else {
            ws.current.close() 
            setIsPaused(false)
        }
        // eslint-disable-next-line
    }, [ws, isPaused, valute])
}
export default useCurrent
import { useEffect, useRef } from 'react';
import { currentSocket } from './websocket';
import { useDispatch } from 'react-redux';

const useCurrent = (valute) => {
    const dispatch = useDispatch()
    
    const ws = useRef(null)

    useEffect(() => {
            ws.current = currentSocket(valute)
            ws.current.onmessage = (event) => {
                const value = JSON.parse(event.data)
                dispatch({
                    type: 'ADD_VALUE',
                    payload: value,
                })
            }
        return () => {
            if (ws.current) {
                ws.current.close()
            }
        }
    }, [valute, dispatch])
}

export default useCurrent;
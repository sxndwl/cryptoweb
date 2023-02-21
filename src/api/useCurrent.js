import { useEffect, useState } from 'react';
import { currentSocket } from './websocket';
import { useDispatch } from 'react-redux';

const useCurrent = (valute) => {
    const dispatch = useDispatch()
    useEffect(() => {//store.subscribe и останавливать ес че
        const socket = currentSocket(valute)
        socket.onmessage = (event) => {
            const data = JSON.parse(event.data)

            dispatch({
                type: `ADD_VALUE`,
                payload: data
            })
        }
    }, [valute])
}

export default useCurrent
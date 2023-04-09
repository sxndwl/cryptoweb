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
                const time = value.E / 1000
                // Создаем объект Date с UTC временем в миллисекундах
                const utcDate = new Date(time * 1000);

                // Создаем объект Date с местным временем на основе UTC времени
                const localDate = new Date(
                    utcDate.toLocaleString("en-US", { timeZone: "Europe/Moscow" })
                );

                // Получаем часы, минуты и секунды местного времени
                const hours = localDate.getHours().toString().padStart(2, "0")
                const minutes = localDate.getMinutes().toString().padStart(2, "0")
                const seconds = localDate.getSeconds().toString().padStart(2, "0")

                const formattedTime = `${hours}:${minutes}:${seconds}`;

                const sortData = {
                    nottimeq: value.E/1000, id: value.t, time: formattedTime, type: value.m, price: Number(value.p), amount: Number(value.q)
                }

                dispatch({
                    type: 'ADD_TRADE',
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

export default useTrade
import { useEffect, useState } from 'react';
import { currentSocket } from './websocket';
import { useDispatch } from 'react-redux';

const useCurrent = (valute) => {
    const [usedOnce, setUsedOnce] = useState(false)
    const [socket, setsocket] = useState()

    useEffect(() => {
        setsocket(currentSocket(valute))//создаем сокет
        if (!usedOnce){
            console.log(2)//здесь будем выводить информацию и так далее
            setUsedOnce(true)
        }else{
            setUsedOnce(false)
            socket.close()//здесь пытаюсь его закрыть но ничего не выходит
            console.log(1)
        }
    }, [valute])
}

export default useCurrent
import { useEffect, useState } from 'react';
import { multiSocket } from './websocket';


const UseBinance = (props) => {
    const [coursesInfo, setCoursesInfo] = useState([])
    const [isPriceGoingUp, setIsPriceGoingUp] = useState(null)

    let usedOnce = false;
    
    useEffect(() =>{
    const socket =  multiSocket(props);//соединяемся с сокетом
    if(!usedOnce){
      // eslint-disable-next-line
      usedOnce = true;
      let previousValue = []
      socket.onmessage = (event) => {
        const courses = JSON.parse(event.data)
        // if((courses.s) === "ETHUSDT"){ это мое временное решение, я планирую создавать отдельные состояние для каждой криптовалюты)))
        //   alert('eth!!')
        // }
        setCoursesInfo(courses)
        setIsPriceGoingUp(
          parseFloat(previousValue.c) !== parseFloat(courses.c) 
          ? parseFloat(previousValue.c) < parseFloat(courses.c)
          : null
        )
        previousValue = courses
      }
    }
  }, [])

  return {
    coursesInfo,
    isPriceGoingUp,
  }

}

export default UseBinance
import { useEffect, useState } from 'react';
import { multiSocket } from './websocket';


const UseBinance = (props) => {
    const [coursesInfo, setCoursesInfo] = useState([])
    const [isPriceGoingUp, setIsPriceGoingUp] = useState(null)

    let usedOnce = false
    
    useEffect(() =>{
    const socket =  multiSocket(props);  // connecting to a socket
    if(!usedOnce) {
      usedOnce = true;
      let previousValue = []
      socket.onmessage = (event) => {
        const courses = JSON.parse(event.data)
        console.log(courses.s.slice(0,-4))
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
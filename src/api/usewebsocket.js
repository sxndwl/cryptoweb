import { useEffect, useState } from 'react';
import { multiSocket } from './websocket';
import { useDispatch } from 'react-redux';

const UseBinance = (props) => {
    const dispatch = useDispatch()
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
        let name = courses.s.slice(0,-4)
        setCoursesInfo(courses)
        setIsPriceGoingUp(
          parseFloat(previousValue.c) !== parseFloat(courses.c) 
          ? parseFloat(previousValue.c) < parseFloat(courses.c)
          : null
        )
        dispatch({ type: `ADD_${name}`, payload: courses })
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
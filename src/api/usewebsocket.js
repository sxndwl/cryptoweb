import { useEffect } from 'react';
import { multiSocket } from './websocket';
import { useDispatch, useSelector } from 'react-redux';

const UseBinance = (valutes) => {
    const dispatch = useDispatch()

    const BTC = useSelector(state => state.btc.btc[0])
    const LTC = useSelector(state => state.ltc.ltc[0])
    const DOGE = useSelector(state => state.doge.doge[0])
    const ETH = useSelector(state => state.eth.eth[0])
    const DASH = useSelector(state => state.dash.dash[0])
    const XRP = useSelector(state => state.xrp.xrp[0])

    let usedOnce = false
    
    useEffect(() => {

    const socket =  multiSocket(valutes);  // connecting to a socket

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
        const value = {
          courses,
          isPriceGoingUp
        }
        dispatch({ type: `ADD_${name}`, payload: value })
      }

    }
  }, [])
}

export default UseBinance
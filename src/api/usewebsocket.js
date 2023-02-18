import { useEffect, useState } from 'react';
import { multiSocket } from './websocket';
import { useDispatch, useSelector } from 'react-redux';

const UseBinance = (valutes) => {
  const dispatch = useDispatch()
  const [socket, setSocket] = useState([])
  const [isPriceGoingUp, setIsPriceGoingUp] = useState([])
  const [difference, setDifference] = useState(0)

  const BTC = useSelector(state => state.btc.btc[0])
  const LTC = useSelector(state => state.ltc.ltc[0])
  const DOGE = useSelector(state => state.doge.doge[0])
  const ETH = useSelector(state => state.eth.eth[0])
  const DASH = useSelector(state => state.dash.dash[0])
  const XRP = useSelector(state => state.xrp.xrp[0])
  let previousValue = [
    { name: 'BTC', value: BTC },
    { name: 'LTC', value: LTC },
    { name: 'DOGE', value: DOGE },
    { name: 'ETH', value: ETH },
    { name: 'DASH', value: DASH },
    { name: 'XRP', value: XRP },
  ]
  useEffect(() => {
    setSocket(multiSocket(valutes))
  }, [])

  socket.onmessage = (event) => {
    const courses = JSON.parse(event.data)
    let name = courses.s.slice(0, -4)

    let sorting = previousValue.find(i => i.name === name).value
    if (sorting === undefined) {
      setIsPriceGoingUp(null)
    } else {
      setIsPriceGoingUp(
        parseFloat(sorting.courses.c) !== parseFloat(courses.c)
          ? parseFloat(sorting.courses.c) < parseFloat(courses.c)
          : null
      )
      if(sorting.courses.c > courses.c) {
        setDifference(parseFloat(sorting.courses.c) - parseFloat(courses.c))
      } else 
        setDifference(parseFloat(courses.c) - parseFloat(sorting.courses.c))
    }
    console.log(courses)
    const value = {
      courses,
      isPriceGoingUp,
      difference
    }
    dispatch({ type: `ADD_${name}`, payload: value })
  }
}

export default UseBinance
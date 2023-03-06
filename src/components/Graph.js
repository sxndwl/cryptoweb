import { createChart, ColorType } from 'lightweight-charts'
import { useEffect, useRef } from 'react'

const Graph = (props) => {
    console.log(props.data)// скоро я уберу мусор из этого кода)))
    const data = props.data
    // const {
    //     data,
    //     colors: {
    //         backgroundColor = '#181920',
    //         textColor = '#ffffff80',
    //     } = {},
    // } = props;

    const chartContainerRef = useRef()

    const backgroundColor = '#181920'
    const textColor = '#ffffff80'

    useEffect(() => {
        const chart = createChart(chartContainerRef.current, {
            layout: {
                background: { type: ColorType.Solid, color: backgroundColor },
                textColor,
            },
            width: chartContainerRef.current.clientWidth,
            height: 300,
            grid: {
                vertLines: {
                    color: '#181920',
                },
                horzLines: {
                    color: 'rgba(197, 203, 206, 0.1)',
                },
            },
        })
        chart.timeScale().fitContent()

        const newSeries = chart.addCandlestickSeries({
            upColor: '#06D6A0',
            downColor: '#EF476F',
            priceLineVisible: false,
        })
        newSeries.setData(data)

        return () => {
            chart.remove()
        }

    }, [data, backgroundColor, textColor])
    
    return (
        <div ref={chartContainerRef} />
    )
}

export default Graph
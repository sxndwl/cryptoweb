import { createChart, ColorType } from 'lightweight-charts'
import { useEffect, useRef } from 'react'

const Graph = (props) => {
    const series = useRef()
    const data = useRef([])

    data.current.push(props.data)

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

        chart.applyOptions({
            timeScale: {
                secondsVisible:true
            },
        });

        series.current = chart.addAreaSeries({
            priceLineVisible: false,
        })
        series.current.setData(data.current)

        return () => {
            chart.remove()
            data.length = 0
        }
        
    }, [data, backgroundColor, textColor])

    useEffect(() => {
        series.current.update(props.data)
    }, [props])

    return (
        <div ref={chartContainerRef} />
    )
}

export default Graph
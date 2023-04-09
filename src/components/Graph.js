import { createChart, ColorType } from 'lightweight-charts'
import { useEffect, useRef } from 'react'

const Graph = (props) => {
    const series = useRef()
    const data = useRef([])
    const styles = props.theme.theme.colors

    const chartContainerRef = useRef()

    const backgroundColor = styles.backgroundColor
    const textColor = styles.subTitleColor
    const lineColor = styles.lineColor

    useEffect(() => {
        const chart = createChart(chartContainerRef.current, {
            layout: {
                background: { type: ColorType.Solid, color: backgroundColor },
                textColor
            },
            width: chartContainerRef.current.clientWidth,
            height: 300,
            grid: {
                vertLines: {
                    color: '#00000000',
                },
                horzLines: {
                    color: lineColor,
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

        return () => {
            chart.remove()
            data.length = 0
        }
        
    }, [backgroundColor, textColor, lineColor])

    useEffect(() => {
        const sortData = {
            time: new Date().getTime() / 1000.0,
            value: Number((props.data.c).toLocaleString('en'))
        }
        data.current.push(sortData)

        series.current.setData(data.current)
        series.current.update(sortData)

    }, [props])

    return (
        <div ref={chartContainerRef} />
    )
}

export default Graph
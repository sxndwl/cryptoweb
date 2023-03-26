import { useSelector } from 'react-redux';
import Graph from './Graph'
import { Wrapper, Title } from '../styles/components'
import useKline from '../api/useKline'

const Chart = () => {
    const valute = useSelector(state => state.current.name)
    useKline(valute) 
    
    const data = useSelector(state => state.current.graph[0])

    if (data) {
        return (
            <Wrapper>
                <Graph data={data} />
            </Wrapper>
        )
    }
    return(
        <Wrapper height='300px'>
            <Title>Loading...</Title>
        </Wrapper>
    )
}

export default Chart
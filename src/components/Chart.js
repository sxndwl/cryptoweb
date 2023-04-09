import { useSelector } from 'react-redux';
import Graph from './Graph'
import { Wrapper, Title } from '../styles/components'
import useKline from '../api/useKline'

const Chart = (theme) => {
    const data = useSelector(state => state.current.value[0])

    if (data) {
        return (
            <Wrapper>
                <Graph theme={theme} data={data} />
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
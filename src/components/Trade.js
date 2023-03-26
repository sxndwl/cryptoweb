import { Wrapper, Title, Inner} from '../styles/components'
import { useSelector } from 'react-redux';
import useTrade from '../api/useTrade'

const Trade = () => {
    const valute = useSelector(state => state.current.name)

    useTrade(valute) 

    return(
        <Wrapper>
            <Title paddingBottom={20} size={18}>Trade history</Title>  
        </Wrapper>
    )
}

export default Trade;
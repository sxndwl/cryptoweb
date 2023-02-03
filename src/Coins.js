import { Title, Wrapper } from './styles/components'
import Currency from './Currency'
import UseBinance from './api/usewebsocket'

const Coins = () => {
    const valutes = [
        'btcusdt@miniTicker@1000ms','ethusdt@miniTicker@1000ms'
    ]
    const { coursesInfo, isPriceGoingUp } = UseBinance(valutes);
    return (
        <Wrapper>
            <Title size={18} weight={700}>Coins</Title>
            <Currency
            name='BTC'
            subname='Bitcoin'
            currencyValue={coursesInfo}
            condition={isPriceGoingUp}
            />
            {/* <Currency
            name='BTC2'
            subname='Bitcoin2'
            currencyValue={coursesInfo2}
            condition={isPriceGoingUp2}
            /> */}
        </Wrapper>
    )
}

export default Coins
import { Title, Wrapper } from './styles/components'
import Currency from './Currency'
import UseBinance from './api/usewebsocket'

const Coins = () => {
    const valutes = [
        'btcusdt@miniTicker@1000ms',
        'ltcusdt@miniTicker@1000ms',
        'dogeusdt@miniTicker@1000ms',
        'ethusdt@miniTicker@1000ms',
        'dashusdt@miniTicker@1000ms',
        'xrpusdt@miniTicker@1000ms',
    ]
    const { coursesInfo, isPriceGoingUp } = UseBinance(valutes);
    console.log(coursesInfo)
    return (
        <Wrapper width='360px'>
            <Title size={18} weight={700}>Coins</Title>
            <Currency
            name='BTC'
            subname='Bitcoin'
            currencyValue={coursesInfo}
            condition={isPriceGoingUp}
            />
            <Currency
            name='LTC'
            subname='Litecoin'
            currencyValue={coursesInfo}
            condition={isPriceGoingUp}
            />
            <Currency
            name='XDG'
            subname='Dogecoin'
            currencyValue={coursesInfo}
            condition={isPriceGoingUp}
            />
            <Currency
            name='ETH'
            subname='Ethereum'
            currencyValue={coursesInfo}
            condition={isPriceGoingUp}
            />
            <Currency
            name='DASH'
            subname='Dash'
            currencyValue={coursesInfo}
            condition={isPriceGoingUp}
            />
            <Currency
            name='XRP'
            subname='Ripple'
            currencyValue={coursesInfo}
            condition={isPriceGoingUp}
            />                                    
        </Wrapper>
    )
}

export default Coins
import { useSelector } from 'react-redux';
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
    ];

    const btc = useSelector(state => state.btc.btc[0])
    const ltc = useSelector(state => state.ltc.ltc[0])
    const doge = useSelector(state => state.doge.doge[0])
    const eth = useSelector(state => state.eth.eth[0])
    const dash = useSelector(state => state.dash.dash[0])
    const xrp = useSelector(state => state.xrp.xrp[0])

    UseBinance(valutes)

    return (
        <Wrapper width='360px'>
            <Title size={18} weight={700}>Coins</Title>
            <Currency
                name='BTC'
                subname='Bitcoin'
                currencyValue={btc}
            />
            <Currency
                name='LTC'
                subname='Litecoin'
                currencyValue={ltc}
            />
            <Currency
                name='XDG'
                subname='Dogecoin'
                currencyValue={doge}
            />
            <Currency
                name='ETH'
                subname='Ethereum'
                currencyValue={eth}
            />
            <Currency
                name='DASH'
                subname='Dash'
                currencyValue={dash}
            />
            <Currency
                name='XRP'
                subname='Ripple'
                currencyValue={xrp}
            />
        </Wrapper>
    )
}

export default Coins
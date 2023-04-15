import { useSelector } from 'react-redux';
import { Title, Wrapper } from '../styles/components'
import Currency from './Currency'
import useMultiSocket from '../api/useMultiSocket'

const Coins = (media) => {
    const valutes = [
        'btcusdt@miniTicker@1000ms',
        'ltcusdt@miniTicker@1000ms',
        'dogeusdt@miniTicker@1000ms',
        'ethusdt@miniTicker@1000ms',
        'dashusdt@miniTicker@1000ms',
        'xrpusdt@miniTicker@1000ms',
    ];

    useMultiSocket(valutes)

    const btc = useSelector(state => state.btc.btc[0])
    const ltc = useSelector(state => state.ltc.ltc[0])
    const doge = useSelector(state => state.doge.doge[0])
    const eth = useSelector(state => state.eth.eth[0])
    const dash = useSelector(state => state.dash.dash[0])
    const xrp = useSelector(state => state.xrp.xrp[0])

    return (
        <Wrapper className='coins' width='25%'>
            <Title paddingBottom={20} size={18} >Coins</Title>
            <Currency
                name='BTC'
                subname='Bitcoin'
                currencyValue={btc}
                media={media}
            />
            <Currency
                name='LTC'
                subname='Litecoin'
                currencyValue={ltc}
                media={media}
            />
            <Currency
                name='XDG'
                subname='Dogecoin'
                currencyValue={doge}
                media={media}
            />
            <Currency
                name='ETH'
                subname='Ethereum'
                currencyValue={eth}
                media={media}
            />
            <Currency
                name='DASH'
                subname='Dash'
                currencyValue={dash}
                media={media}
            />
            <Currency
                name='XRP'
                subname='Ripple'
                currencyValue={xrp}
                media={media}
            />
        </Wrapper>
    )
}

export default Coins
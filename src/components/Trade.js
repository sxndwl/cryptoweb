import styled from "styled-components"
import { Wrapper, Title, Inner, Subtitle} from '../styles/components'
import { useSelector } from 'react-redux';
import useTrade from '../api/useTrade'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`
const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    border-radius: 3px;
    padding: 1px;
    ${props => props.up && `
        background: rgba(6, 214, 160, 0.11);
    `}
    ${props => props.down && `
        background: rgba(239, 71, 111, 0.11);
    `}
`

const Trade = () => {
    const valute = useSelector(state => state.current.name)
    useTrade(valute) 

    const value = useSelector(state => state.trade.trades)

    if (value[0]) {
        return(    
            <Wrapper>
                <Title paddingBottom={20} size={18}>Trade history</Title>
                <Wrap>
                    {value.map((trade) => (
                        <Inner key={trade.id} box>
                                <Inner section>
                                    <Subtitle>Time</Subtitle>
                                    <Title>{trade.time}</Title>
                                </Inner>
                                {trade.type === true ? (
                                        <>
                                            <Inner section>
                                                <Subtitle>Type</Subtitle>
                                                <Content up>
                                                    <Title up>BUY</Title>
                                                </Content>
                                            </Inner>
                                            <Inner section>
                                                <Subtitle>Price</Subtitle>
                                                <Title up>{trade.price.toLocaleString('en')}$</Title>
                                            </Inner>
                                        </>
                                ) : (
                                        <>
                                            <Inner section>
                                                <Subtitle>Type</Subtitle>
                                                <Content down>
                                                    <Title down>SELL</Title>
                                                </Content>
                                            </Inner>
                                            <Inner section>
                                                <Subtitle>Price</Subtitle>
                                                <Title down>{trade.price.toLocaleString('en')}$</Title>
                                            </Inner>
                                        </>
                                )}
                                <Inner section>
                                    <Subtitle>Amount ({valute})</Subtitle>
                                    <Title>{trade.amount}</Title>
                                </Inner>
                            </Inner>
                    ))}
                </Wrap>
            </Wrapper>
        )
    }

    return(
        <Wrapper>
            <Wrap>
                <Inner box>
                        <Inner section>
                            <Subtitle>Time</Subtitle>
                            <Title><Skeleton baseColor='#a8a8a8' /></Title>
                        </Inner>
                        <Inner section>
                            <Subtitle>Type</Subtitle>
                            <Title><Skeleton baseColor='#a8a8a8' /></Title>
                        </Inner>
                        <Inner section>
                            <Subtitle>Price</Subtitle>
                            <Title><Skeleton baseColor='#a8a8a8' /></Title>
                        </Inner>
                        <Inner section>
                            <Subtitle>Amount</Subtitle>
                            <Title><Skeleton baseColor='#a8a8a8' /></Title>
                        </Inner>
                </Inner>
            </Wrap>
        </Wrapper>
    )
}

export default Trade;
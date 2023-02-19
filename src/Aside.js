import { Title, Wrapper, Inner, Subtitle } from './styles/components'
import styled from "styled-components"

const Wrap = styled(Wrapper)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Aside = () => {
    let pos =0
    while (pos >= 8) {
        pos-=8
        console.log(pos)
    }

    return(
        <Wrap height='40px' width='75%'>
            <Inner>
                <Subtitle>Coin name</Subtitle>
                <Title paddingTop={4} size={16} weight={500}>BTC</Title>
            </Inner>
            <Inner>
                <Subtitle>Price</Subtitle>
                <Title paddingTop={4} size={16} weight={500}>0.05366737</Title>
            </Inner>
            <Inner>
                <Subtitle>Change</Subtitle>
                <Title paddingTop={4} size={16} weight={500}>-50%</Title>
            </Inner>
            <Inner>
                <Subtitle>24h Volume</Subtitle>
                <Title paddingTop={4} size={16} weight={500}>356.7 ETH /37366 DODGE</Title>
            </Inner>
            <Inner>
                <Subtitle>24 High</Subtitle>
                <Title paddingTop={4} size={16} weight={500}>0.033334</Title>
            </Inner>
            <Inner>
                <Subtitle>24h Low</Subtitle>
                <Title paddingTop={4} size={16} weight={500}>0.0333348989</Title>
            </Inner>
        </Wrap>
    )
}

export default Aside;
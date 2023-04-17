import { useSelector } from 'react-redux'
import { Title, Wrapper, Inner, Subtitle } from '../styles/components'
import styled from "styled-components"
import useCurrent from '../api/useCurrent'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Wrap = styled(Wrapper)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Row = styled(Inner)`
    width: 16%;
    
    @media ${props => props.media.media.phone} {
        width: 15%;
        ${props => props.mediaNone && `
            display: none;
        `}
    }
`

const Aside = (props) => {
    const name = useSelector(state => state.current.name)
    useCurrent(name)

    const value = useSelector(state => state.current.value[0])
    
    if (value) {
        return(
            <Wrap className='aside' height='40px'>
                <Row media={props}>
                    <Subtitle>Coin name</Subtitle>
                    <Title paddingTop={4} primary>{name}</Title>
                </Row>
                <Row media={props}>
                    <Subtitle>Price</Subtitle>
                    <Title paddingTop={4}>${parseFloat(value.c).toLocaleString('en')}</Title>
                </Row>
                {value.P < 0 ? (
                        <Row media={props}>
                            <Subtitle>Change</Subtitle>
                            <Title paddingTop={4} down>{parseFloat(value.P).toLocaleString('en')}%</Title>
                        </Row>
                    ) : (
                           <Row media={props}>
                            <Subtitle>Change</Subtitle>
                            <Title paddingTop={4} up>{parseFloat(value.P).toLocaleString('en')}%</Title>
                        </Row>
                    )   
                }
                <Row media={props}>
                    <Subtitle>24h High</Subtitle>
                    <Title paddingTop={4}>${parseFloat(value.h).toLocaleString('en')}</Title>
                </Row>
                <Row media={props}>
                    <Subtitle>24h Low</Subtitle>
                    <Title paddingTop={4}>${parseFloat(value.l).toLocaleString('en')}</Title>
                </Row>
                <Row media={props} mediaNone>
                    <Subtitle>24h Volume</Subtitle>
                    <Title paddingTop={4}>{parseFloat(value.q).toLocaleString('en')}</Title>   
                </Row>
            </Wrap>
        )
    }
    
    return(
        <Wrap height='40px'>
            <Row media={props}>
                <Subtitle>Coin name</Subtitle>
                <Title paddingTop={4}><Skeleton baseColor='#a8a8a8' /></Title>
            </Row>
            <Row media={props}>
                <Subtitle>Price</Subtitle>
                <Title paddingTop={4}><Skeleton baseColor='#a8a8a8' /></Title>
            </Row>
            <Row media={props}>
                <Subtitle>Change</Subtitle>
                <Title paddingTop={4}><Skeleton baseColor='#a8a8a8' /></Title>
            </Row>
            <Row media={props}>
                <Subtitle>24h High</Subtitle>
                <Title paddingTop={4}><Skeleton baseColor='#a8a8a8' /></Title>
            </Row>
            <Row media={props}>
                <Subtitle>24h Low</Subtitle>
                <Title paddingTop={4}><Skeleton baseColor='#a8a8a8' /></Title>
            </Row>
            <Row media={props} mediaNone>
                <Subtitle>24h Volume</Subtitle>
                <Title paddingTop={4}><Skeleton baseColor='#a8a8a8' /></Title>
            </Row>
        </Wrap>
    )
}

export default Aside;
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

const Aside = () => {
    const name = useSelector(state => state.current.name)
    useCurrent(name)

    const value = useSelector(state => state.current.value[0])
    
    if (value) {
        return(
            <Wrap height='40px'>
                <Inner width='16%'>
                    <Subtitle>Coin name</Subtitle>
                    <Title paddingTop={4} weight={500}>{name.slice(0, -4)}</Title>
                </Inner>
                <Inner width='16%'>
                    <Subtitle>Price</Subtitle>
                    <Title paddingTop={4} weight={600}>${parseFloat(value.c).toLocaleString('en')}</Title>
                </Inner>
                {value.P < 0 ? (
                        <Inner width='16%'>
                            <Subtitle>Change</Subtitle>
                            <Title paddingTop={4} weight={600} down>{parseFloat(value.P).toLocaleString('en')}%</Title>
                        </Inner>
                    ) : (
                           <Inner width='16%'>
                            <Subtitle>Change</Subtitle>
                            <Title paddingTop={4} weight={600} up>{parseFloat(value.P).toLocaleString('en')}%</Title>
                        </Inner>
                    )   
                }
                <Inner width='16%'>
                    <Subtitle>24h High</Subtitle>
                    <Title paddingTop={4} weight={600}>${parseFloat(value.h).toLocaleString('en')}</Title>
                </Inner>
                <Inner width='16%'>
                    <Subtitle>24h Low</Subtitle>
                    <Title paddingTop={4} weight={600}>${parseFloat(value.l).toLocaleString('en')}</Title>
                </Inner>
                <Inner width='16%'>
                    <Subtitle>24h Volume</Subtitle>
                    <Title paddingTop={4} weight={600}>{parseFloat(value.q).toLocaleString('en')}</Title>   
                </Inner>
            </Wrap>
        )
    }
    return(
        <Wrap height='40px'>
            <Inner width='16%'>
                <Subtitle>Coin name</Subtitle>
                <Title paddingTop={4} weight={500}><Skeleton baseColor='#a8a8a8' /></Title>
            </Inner>
            <Inner width='16%'>
                <Subtitle>Price</Subtitle>
                <Title paddingTop={4} weight={600}><Skeleton baseColor='#a8a8a8' /></Title>
            </Inner>
            <Inner width='16%'>
                <Subtitle>Change</Subtitle>
                <Title paddingTop={4} weight={600}><Skeleton baseColor='#a8a8a8' /></Title>
            </Inner>
            <Inner width='16%'>
                <Subtitle>24h Volume</Subtitle>
                <Title paddingTop={4} weight={600}><Skeleton baseColor='#a8a8a8' /></Title>
            </Inner>
            <Inner width='16%'>
                <Subtitle>24h High</Subtitle>
                <Title paddingTop={4} weight={600}><Skeleton baseColor='#a8a8a8' /></Title>
            </Inner>
            <Inner width='16%'>
                <Subtitle>24h Low</Subtitle>
                <Title paddingTop={4} weight={600}><Skeleton baseColor='#a8a8a8' /></Title>
            </Inner>
        </Wrap>
    )
}

export default Aside;
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
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
    const dispatch = useDispatch()

    const value = useSelector(state => state.current)
    useCurrent(value.name)
    // useEffect(() => {
    //     dispatch({ type: 'CHANGE_CURRENT', payload: 'ethusdt' })
    // },[])

    if (value.value[0]) {
        return(
            <Wrap height='40px' width='75%'>
                <Inner width='16%'>
                    <Subtitle>Coin name</Subtitle>
                    <Title paddingTop={4} weight={500}>{value.name.toUpperCase().slice(0, -4)}</Title>
                </Inner>
                <Inner width='16%'>
                    <Subtitle>Price</Subtitle>
                    <Title paddingTop={4} weight={600}>${parseFloat(value.value[0].c).toLocaleString('en')}</Title>
                </Inner>
                <Inner width='16%'>
                    <Subtitle>Change</Subtitle>
                    <Title paddingTop={4} weight={600}>{parseFloat(value.value[0].P).toLocaleString('en')}%</Title>
                </Inner>
                <Inner width='16%'>
                    <Subtitle>24h Volume</Subtitle>
                    <Title paddingTop={4} weight={600}>{parseFloat(value.value[0].q).toLocaleString('en')}</Title>
                </Inner>
                <Inner width='16%'>
                    <Subtitle>24 High</Subtitle>
                    <Title paddingTop={4} weight={600}>${parseFloat(value.value[0].h).toLocaleString('en')}</Title>
                </Inner>
                <Inner width='16%'>
                    <Subtitle>24h Low</Subtitle>
                    <Title paddingTop={4} weight={600}>${parseFloat(value.value[0].l).toLocaleString('en')}</Title>
                </Inner>
            </Wrap>
        )
    }
    return(
        <Wrap height='40px' width='75%'>
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
                <Subtitle>24 High</Subtitle>
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
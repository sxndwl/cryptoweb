import { useDispatch } from 'react-redux';
import { Title, Subtitle, Inner } from '../styles/components'
import styled from "styled-components"
import { Icon20ArrowDownOutline, Icon20ArrowRightOutline, Icon20ArrowUpOutline } from '@vkontakte/icons';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding-top: 15px;
    transition: 0.5s all;

    &:hover{
        opacity: 0.5;
    }
`

const ArrowWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    width: 28px;
    border-radius: 50%;
    border: 0.58152px solid ${({ border = 'rgb(156 163 175)' }) => border};
    background: ${({ background = ' rgba(156 163 175 0.5)' }) => background};
    stroke: ${({ stroke = 'rgb(156 163 175)' }) => stroke};
    margin-left: 10px;
    transition: none;
`

const Currency = ({ name, subname, currencyValue }) => {
    const dispatch = useDispatch()

    function changeCurrency(name){
        dispatch({ type: 'CHANGE_CURRENT', payload: name })
        dispatch({ type: 'ADD_VALUE', payload: undefined })
    }

    if (currencyValue) {
        return (
            <Wrap onClick={() => changeCurrency(currencyValue.courses.s)}>
                <Inner width='25%'>
                    <Title size={16} weight={500}>{name}</Title>
                    <Subtitle>{subname}</Subtitle>
                </Inner>
                {currencyValue.isPriceGoingUp === null ? (
                    <>
                        <Inner width='25%'>
                            <ArrowWrap>
                                <Icon20ArrowRightOutline fill='9ca3af'/>
                            </ArrowWrap>
                        </Inner>
                        <Inner width='25%'>
                            <Title weight={600} color='#9ca3af'>${parseFloat(currencyValue.difference).toLocaleString('en')}</Title>
                            {/* <Subtitle color='#9ca3af'>-(5,20%)</Subtitle> */}
                        </Inner>
                    </>
                ) : currencyValue.isPriceGoingUp ? (
                    <>
                        <Inner width='25%'>
                            <ArrowWrap stroke='#06D6A0' border='#06D6A0' background='rgba(6, 214, 160, 0.11)'>
                                <Icon20ArrowUpOutline fill='06D6A0'/>
                            </ArrowWrap>
                        </Inner>
                        <Inner width='25%'>
                            <Title weight={600} color='#06D6A0'>${parseFloat(currencyValue.difference).toLocaleString('en')}</Title>
                            {/* <Subtitle color='#06D6A0'>-(5,20%)</Subtitle> */}
                        </Inner>
                    </>
                ) : (
                    <>
                        <Inner width='25%'>
                            <ArrowWrap stroke='#EF476F' border='#EF476F' background='rgba(239, 71, 111, 0.11)'>
                                <Icon20ArrowDownOutline fill='EF476F' />
                            </ArrowWrap>
                        </Inner>
                        <Inner width='25%'>
                            <Title weight={600} color='#EF476F'>${parseFloat(currencyValue.difference).toLocaleString('en')}</Title>
                            {/* <Subtitle color='#EF476F'>-(5,20%)</Subtitle> */}
                        </Inner>
                    </>
                )}
                <Inner width='25%'>
                    <Title size={16} weight={600}>${parseFloat(currencyValue.courses.c).toLocaleString('en')}</Title>
                </Inner>
            </Wrap>
       )
    }
    return (
        <Wrap>
            <Inner width='25%'>
                <Title size={16} weight={500}>{<Skeleton baseColor='#a8a8a8' width={70} />}</Title>
                <Subtitle>{<Skeleton baseColor='#a8a8a8' width={70} />}</Subtitle>
            </Inner>
            <Inner width='25%'>
                <ArrowWrap border='none'>
                    <Skeleton baseColor='#a8a8a8' circle width={28} height={28} />
                </ArrowWrap>
            </Inner>
            <Inner width='25%'>
                <Title weight={600} color='#06D6A0'><Skeleton baseColor='#a8a8a8' width={70} /></Title>
                {/* <Subtitle color='#06D6A0'><Skeleton width={70} /></Subtitle> */}
            </Inner>
            <Inner width='25%'>
                <Skeleton baseColor='#a8a8a8' />
            </Inner>
        </Wrap>
    );
}

export default Currency
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

const Row = styled(Inner)`
    width: 25%;
    @media ${props => props.media.media.phone} {
        width: 33%;
        ${props => props.mediaNone && `
            display: none;
        `}
    }
`

const ArrowWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    width: 28px;
    border-radius: 50%;
    margin-left: 10px;
    transition: none;

    ${props => props.none && `
        border: 0.58152px solid rgb(156 163 175);
        background: rgba(156 163 175 0.5);
        stroke: rgb(156 163 175);
    `}
    ${props => props.up && `
        border: 0.58152px solid #06D6A0;
        background: rgba(6, 214, 160, 0.11);
        stroke: #06D6A0;
    `}
    ${props => props.down && `
        border: 0.58152px solid #EF476F;
        background: rgba(239, 71, 111, 0.11);
        stroke: #EF476F;
    `}
`

const Currency = ({ name, subname, currencyValue, media }) => {
    const dispatch = useDispatch()

    function changeCurrency (name){
        dispatch({ type: 'CHANGE_CURRENT', payload: name })
        dispatch({ type: 'ADD_VALUE', payload: undefined })
        dispatch({ type: 'ADD_GRAPH', payload: undefined })
        dispatch({ type: 'CLEAR_TRADES', payload: undefined })
    }

    if (currencyValue) {
        return (
            <Wrap onClick={() => changeCurrency(currencyValue.courses.s)}>
                <Row media={media}>
                    <Title size={16} primary>{name}</Title>
                    <Subtitle>{subname}</Subtitle>
                </Row>
                {currencyValue.isPriceGoingUp === null ? (
                    <>
                        <Row media={media}>
                            <ArrowWrap none>
                                <Icon20ArrowRightOutline fill='9ca3af'/>
                            </ArrowWrap>
                        </Row>
                        <Row media={media} mediaNone>
                            <Title none>${parseFloat(currencyValue.difference).toLocaleString('en')}</Title>
                        </Row>
                    </>
                ) : currencyValue.isPriceGoingUp ? (
                    <>
                        <Row media={media}>
                            <ArrowWrap up>
                                <Icon20ArrowUpOutline fill='06D6A0'/>
                            </ArrowWrap>
                        </Row>
                        <Row media={media} mediaNone>
                            <Title up>${parseFloat(currencyValue.difference).toLocaleString('en')}</Title>
                        </Row>
                    </>
                ) : (
                    <>
                        <Row media={media}>
                            <ArrowWrap down>
                                <Icon20ArrowDownOutline fill='EF476F' />
                            </ArrowWrap>
                        </Row>
                        <Row media={media} mediaNone>
                            <Title down>${parseFloat(currencyValue.difference).toLocaleString('en')}</Title>
                        </Row>
                    </>
                )}
                <Row media={media}>
                    <Title size={16}>${parseFloat(currencyValue.courses.c).toLocaleString('en')}</Title>
                </Row>
            </Wrap>
       )
    }

    return (
        <Wrap>
            <Row media={media}>
                <Title size={16}>{<Skeleton baseColor='#a8a8a8' width={70} />}</Title>
                <Subtitle>{<Skeleton baseColor='#a8a8a8' width={70} />}</Subtitle>
            </Row>
            <Row media={media}>
                <ArrowWrap border='none'>
                    <Skeleton baseColor='#a8a8a8' circle width={28} height={28} />
                </ArrowWrap>
            </Row>
            <Row media={media}>
                <Title color='#06D6A0'><Skeleton baseColor='#a8a8a8' width={70} /></Title>
            </Row>
            <Row media={media}>
                <Skeleton baseColor='#a8a8a8' />
            </Row>
        </Wrap>
    );
}

export default Currency
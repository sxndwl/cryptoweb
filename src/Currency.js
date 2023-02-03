import { Title, Subtitle } from './styles/components'
import styled from "styled-components"
import { Icon20ArrowDownOutline, Icon20ArrowRightOutline, Icon20ArrowUpOutline } from '@vkontakte/icons';

const Wrap = styled.div`
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Inner = styled.div`
    width: ${({ width = 'auto' }) => width};// через псевдокласс last-child реализовать!
    display: flex;
    flex-direction: column;
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
    transition: none;
`

const Currency = ({ name, subname, currencyValue, condition }) => {
    console.log(currencyValue)
    return (
    <Wrap>
        <Inner>
                <Title size={16} weight={500}>{name}</Title>
                <Subtitle>{subname}</Subtitle>
        </Inner>
    { condition === null ? (
        <>
            <Inner>
                <ArrowWrap>
                    <Icon20ArrowRightOutline/>
                </ArrowWrap>
            </Inner>
            <Inner>
                <Title weight={600} color='#9ca3af'>435.94$</Title>
                <Subtitle color='#9ca3af'>-68.44 (5,20%)</Subtitle>
            </Inner>
        </>
      ) : condition ? (
        <>
            <Inner>
                    <ArrowWrap stroke='#06D6A0' border='#06D6A0' background='rgba(6, 214, 160, 0.11)'>
                        <Icon20ArrowUpOutline/>
                    </ArrowWrap>
            </Inner>
            <Inner>
                    <Title weight={600} color='#06D6A0'>+ 5.22%</Title>
                    {/* <Subtitle color='#06D6A0'>-68.44 (5,20%)</Subtitle> */}
            </Inner>
        </>
      ) : (
        <>
            <Inner>
                    <ArrowWrap stroke='#EF476F' border='#EF476F' background='rgba(239, 71, 111, 0.11)'>
                        <Icon20ArrowDownOutline/>
                    </ArrowWrap>
            </Inner>
            <Inner>
                    <Title weight={600} color='#EF476F'>- 5.66%</Title>
                    {/* <Subtitle color='#EF476F'>-68.44 (5,20%)</Subtitle> */}
            </Inner>
        </>
    ) }
        <Inner width='25%'>
                <Title size={16} weight={600}>${parseFloat(currencyValue.c).toLocaleString('en')}</Title>
        </Inner>     
    </Wrap>
    )
}

export default Currency
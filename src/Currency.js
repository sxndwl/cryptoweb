import { Title, Subtitle } from './styles/components'
import styled from "styled-components"
import { Icon20ArrowDownOutline, Icon20ArrowRightOutline, Icon20ArrowUpOutline } from '@vkontakte/icons';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Wrap = styled.div`
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Inner = styled.div`
    width: 25%;
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
    margin-left: 10px;
    transition: none;
`

const Currency = ({ name, subname, currencyValue }) => {//сделать с помощью useEffect
    if (currencyValue) {
        return(
    <Wrap>
        <Inner>
                <Title size={16} weight={500}>{name}</Title>
                <Subtitle>{subname}</Subtitle>
        </Inner>
    { currencyValue.isPriceGoingUp === null ? (
        <>
            <Inner>
                <ArrowWrap>
                    <Icon20ArrowRightOutline/>
                </ArrowWrap>
            </Inner>
            <Inner>
                <Title weight={600} color='#9ca3af'>435.94$</Title>
                {/* <Subtitle color='#9ca3af'>-68.44 (5,20%)</Subtitle> */}
            </Inner>
        </>
      ) : currencyValue.isPriceGoingUp ? (
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
        <Inner>
                <Title size={16} weight={600}>${parseFloat(currencyValue.courses.c).toLocaleString('en')}</Title>
        </Inner>     
    </Wrap>
        )
    }
    return(
        <Wrap>
            <Inner>
                <Title size={16} weight={500}>{<Skeleton baseColor='#a8a8a8' width={70} />}</Title>
                <Subtitle>{<Skeleton baseColor='#a8a8a8' width={70} />}</Subtitle>
            </Inner>
            <Inner>
                <ArrowWrap border='none'>
                    <Skeleton baseColor='#a8a8a8' circle width={28} height={28} />
                </ArrowWrap>
            </Inner>
            <Inner>
                <Title weight={600} color='#06D6A0'><Skeleton baseColor='#a8a8a8' width={70}/></Title>
                {/* <Subtitle color='#06D6A0'>-68.44 (5,20%)</Subtitle> */}
            </Inner>
            <Inner>
                <Skeleton baseColor='#a8a8a8' />
            </Inner>
        </Wrap>
    );
}

export default Currency
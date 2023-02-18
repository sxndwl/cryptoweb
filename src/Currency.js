import { Title, Subtitle, Inner } from './styles/components'
import styled from "styled-components"
import { Icon20ArrowDownOutline, Icon20ArrowRightOutline, Icon20ArrowUpOutline } from '@vkontakte/icons';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Wrap = styled.div`
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`

const Box = styled(Inner)`
    width: 25%;
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
        return (
            <Wrap>
                <Box>
                    <Title size={16} weight={500}>{name}</Title>
                    <Subtitle>{subname}</Subtitle>
                </Box>
                {currencyValue.isPriceGoingUp === null ? (
                    <>
                        <Box>
                            <ArrowWrap>
                                <Icon20ArrowRightOutline />
                            </ArrowWrap>
                        </Box>
                        <Box>
                            <Title weight={600} color='#9ca3af'>${parseFloat(currencyValue.difference).toFixed(2)}</Title>
                            {/* <Subtitle color='#9ca3af'>-(5,20%)</Subtitle> */}
                        </Box>
                    </>
                ) : currencyValue.isPriceGoingUp ? (
                    <>
                        <Box>
                            <ArrowWrap stroke='#06D6A0' border='#06D6A0' background='rgba(6, 214, 160, 0.11)'>
                                <Icon20ArrowUpOutline />
                            </ArrowWrap>
                        </Box>
                        <Box>
                                <Title weight={600} color='#06D6A0'>${parseFloat(currencyValue.difference).toFixed(2)}</Title>
                            {/* <Subtitle color='#06D6A0'>-(5,20%)</Subtitle> */}
                        </Box>
                    </>
                ) : (
                    <>
                        <Box>
                            <ArrowWrap stroke='#EF476F' border='#EF476F' background='rgba(239, 71, 111, 0.11)'>
                                <Icon20ArrowDownOutline />
                            </ArrowWrap>
                        </Box>
                        <Box>
                            <Title weight={600} color='#EF476F'>${parseFloat(currencyValue.difference).toFixed(2)}</Title>
                            {/* <Subtitle color='#EF476F'>-(5,20%)</Subtitle> */}
                        </Box>
                    </>
                )}
                <Box>
                    <Title size={16} weight={600}>${parseFloat(currencyValue.courses.c).toLocaleString('en')}</Title>
                </Box>
            </Wrap>
       )
    }
    return (
        <Wrap>
            <Box>
                <Title size={16} weight={500}>{<Skeleton baseColor='#a8a8a8' width={70} />}</Title>
                <Subtitle>{<Skeleton baseColor='#a8a8a8' width={70} />}</Subtitle>
            </Box>
            <Box>
                <ArrowWrap border='none'>
                    <Skeleton baseColor='#a8a8a8' circle width={28} height={28} />
                </ArrowWrap>
            </Box>
            <Box>
                <Title weight={600} color='#06D6A0'><Skeleton baseColor='#a8a8a8' width={70} /></Title>
                {/* <Subtitle color='#06D6A0'><Skeleton width={70} /></Subtitle> */}
            </Box>
            <Box>
                <Skeleton baseColor='#a8a8a8' />
            </Box>
        </Wrap>
    );
}

export default Currency
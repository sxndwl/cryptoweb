import styled from "styled-components"
import { Title } from "../styles/components"
import Mockup from '../close.png'

const Wrap = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.theme.colors.backgroundColor};  
    display: none;
    z-index: 9999;

    @media ${props => props.theme.media.tablet}{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
    }
`

const Close = (theme) => {
    return(
        <Wrap theme={theme}>
            <img src={Mockup} alt='Mockup' width='320px' height='200px' />
            <Title className='ru' size={22}>cryptoweb не поддерживает мобильные устройства</Title>
        </Wrap>
    )
}

export default Close

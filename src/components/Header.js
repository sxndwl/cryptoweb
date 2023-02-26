import { Wrapper, Title, Inner } from '../styles/components'
import styled from "styled-components"
import { Icon20MoneyOutline, Icon28SettingsOutline, Icon28SearchOutline } from '@vkontakte/icons';

const Wrap = styled(Wrapper)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    border: none;
    border-radius: 0;
    border-bottom: 0.58152px solid rgba(255, 255, 255, 0.2);
`
const Text = styled(Title)`
    padding-left: 10px;
`
const Box = styled.div`
    display: flex;
    align-items: center;
    background: #151517;
    border: 0.58152px solid rgba(255, 255, 255, 0.2);
    border-radius: 7px;
    padding: 3px;
    margin-right: 50px;
`

const Header = () => {
    return(
        <Wrap height='45px'>
            <Inner flexDirection='row'>
                <Icon20MoneyOutline width={28} height={28} fill='2688EB' />
                <Text size={18}>cryptoweb</Text>
            </Inner>
            <Inner flexDirection='row' alignItems='center'>
                <Box>
                    <Icon28SearchOutline width={24} height={24} fill='rgba(255, 255, 255, 0.2)' />
                    <input type="text" placeholder='Search...' />
                </Box>
                <Icon28SettingsOutline fill='rgba(255, 255, 255, 0.2)'/>
            </Inner>
        </Wrap>
    )
}

export default Header
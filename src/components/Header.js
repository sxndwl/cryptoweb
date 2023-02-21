import { Wrapper, Title } from '../styles/components'
import styled from "styled-components"
import { Icon20MoneyOutline } from '@vkontakte/icons';

const Wrap = styled(Wrapper)`
    display: flex;
    align-items: center;
    margin: 0;
    border: none;
    border-radius: 0;
    border-bottom: 0.58152px solid rgba(255, 255, 255, 0.2);
`
const Text = styled(Title)`
    padding-left: 10px;
`

const Header = () => {
    return(
        <Wrap height='45px'>
            <Icon20MoneyOutline width={28} height={28} fill='2688EB'/>
            <Text size={18}>cryptoweb</Text>
        </Wrap>
    )
}

export default Header
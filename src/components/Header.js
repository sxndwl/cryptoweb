import { Wrapper, Title, Inner } from '../styles/components'
import styled from "styled-components"
import { Icon20MoneyOutline, Icon28SunOutline, Icon28MoonOutline } from '@vkontakte/icons';
import Search from './Search';

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

const Header = ({onThemeChange, currentTheme, theme}) => {
    const handleThemeToggle = () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        onThemeChange(newTheme);
    }

    return(
        <Wrap height='45px'>
            <Inner flexDirection='row'>
                <Icon20MoneyOutline width={28} height={28} fill='2688EB' />
                <Text size={18}>cryptoweb</Text>
            </Inner>
            {/* <Inner flexDirection='row' alignItems='center'>
                <Search />
                <Icon28SettingsOutline fill='rgba(255, 255, 255, 0.2)'/>
            </Inner> */}
            <button onClick={handleThemeToggle}>
                {currentTheme === 'dark' ? (
                    <Icon28MoonOutline width={28} height={28} fill={theme.colors.subTitleColor} />
                ) : (
                    <Icon28SunOutline width={28} height={28} fill={theme.colors.subTitleColor} />
                )}
            </button>
        </Wrap>
    )
}

export default Header
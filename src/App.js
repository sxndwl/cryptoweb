import styled from 'styled-components'
import GlobalStyles from './styles/global'
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Inner } from './styles/components'
import { themes } from './styles/theme'
import Header from './components/Header'
import Coins from './components/Coins'
import Aside from './components/Aside'
import Chart from './components/Chart'
import Trade from './components/Trade' 
import Tutorial from './components/Tutorial' 
import Close from './components/Close' 

const Box = styled.div`
  display: flex;
`

const AllWrapper = styled.div`
  @media ${props => props.media.tablet} {
    display: none;
  }
`

const App = () => {
  const theme = useSelector(state => state.theme.theme)
  const dispatch = useDispatch();

  const ThemeChange = newTheme => {
    dispatch({ type: 'SET_THEME', payload: newTheme })
    localStorage.setItem('theme', newTheme === 'light' ? 'light' : 'dark')
  }

  return (
    <ThemeProvider theme={themes[theme]}>
    <Close media={themes.media} theme={themes[theme]}/>
    <AllWrapper media={themes.media}>
        <Tutorial theme={themes[theme]} />
        <Header theme={themes[theme]} currentTheme={theme} onThemeChange={ThemeChange} />
        <Box>
          <Coins media={themes.media}/>
          <Inner width='75%'>
            <Aside media={themes.media} />
            <Chart theme={themes[theme]} />
          </Inner>
        </Box>
        <Trade />
    </AllWrapper>
    <GlobalStyles theme={themes[theme]} />   
    </ThemeProvider>
  )
}

export default App
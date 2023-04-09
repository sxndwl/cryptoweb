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

const Box = styled.div`
    display: flex;
`

const App = () => {
  const theme = useSelector(state => state.theme.theme)
  const dispatch = useDispatch();

  const ThemeChange = newTheme => {
    dispatch({ type: 'SET_THEME', payload: newTheme })
  }

  return (
    <ThemeProvider theme = {themes[theme]}>
      <Header theme={themes[theme]}currentTheme={theme} onThemeChange={ThemeChange}/>
          <Box>
              <Coins/>
                <Inner width='75%'>
                    <Aside/>
                    <Chart theme={themes[theme]}/>                  
                </Inner> 
          </Box>
    <Trade/>
    <GlobalStyles theme={themes[theme]}/>   
    </ThemeProvider>
  )
}

export default App
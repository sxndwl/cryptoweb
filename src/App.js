import styled from 'styled-components'
import { Inner } from './styles/components'
import Header from './components/Header'
import Coins from './components/Coins'
import Aside from './components/Aside'
import Chart from './components/Chart'

const Box = styled.div`
    display: flex;
`

const App = () => {
  return (
    <>
      <Header />
        <Box>
            <Coins/>
              <Inner width='75%'>
                  <Aside />
                  <Chart/>                  
              </Inner>
        </Box>
    </>
  )
}

export default App
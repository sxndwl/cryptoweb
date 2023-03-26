import styled from 'styled-components'
import { Inner } from './styles/components'
import Header from './components/Header'
import Coins from './components/Coins'
import Aside from './components/Aside'
import Chart from './components/Chart'
import Trade from './components/Trade'

const Page = styled.div`
    height: 50%;
`

const Box = styled.div`
    display: flex;
`

const App = () => {
  return (
    <>
      <Page>
        <Header />
          <Box>
              <Coins/>
                <Inner width='75%'>
                    <Aside />
                    <Chart/>                  
                </Inner> 
          </Box>
      </Page>
    <Trade />   
    </>
  )
}

export default App
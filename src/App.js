import styled from 'styled-components'
import Header from './components/Header'
import Coins from './components/Coins'
import Aside from './components/Aside'

const Box = styled.div`
    display: flex;
`

const App = () => {
  return (
    <>
      <Header />
        <Box>
            <Coins/>
            <Aside/>
        </Box>
    </>
  )
}

export default App
import styled from "styled-components"
import GlobalStyles from './styles/global'
import Coins from './Coins'
import Aside from './Aside'

const Box = styled.div`
    display: flex;
`

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Box>
          <Coins/>
          <Aside/>
      </Box>
    </>
  )
}

export default App
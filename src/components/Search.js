import styled from "styled-components"
import { Icon28SearchOutline } from '@vkontakte/icons';

const Box = styled.div`
    display: flex;
    align-items: center;
    background: #151517;
    border: 0.58152px solid rgba(255, 255, 255, 0.2);
    border-radius: 7px;
    padding: 3px;  
    margin-right: 50px;
`

const Search = () => {

    return(
        <Box>
            <Icon28SearchOutline width={24} height={24} fill='rgba(255, 255, 255, 0.2)' />
            <input type="text" placeholder='Search...' />
        </Box>
    )
}

export default Search
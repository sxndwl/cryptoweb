import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import styled from "styled-components"
import { Title } from '../styles/components'
import { Icon28SearchOutline, Icon28ErrorCircleOutline, Icon28MoneyCircleOutline } from '@vkontakte/icons';

const Box = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    background: ${props => props.theme.theme.colors.bodyColor};
    border: 0.58152px solid ${props => props.theme.theme.colors.borderColor};
    border-radius: 7px;
    padding: 3px;  
    margin-right: 50px;
`

const Results = styled.div`
    position: absolute;
    top: 38px;
    left: 0;
    width: 100%;
    height: auto;
    background: ${props => props.theme.theme.colors.bodyColor};
    border: 0.58152px solid ${props => props.theme.theme.colors.borderColor};
    border-radius: 7px;
    z-index: 9999;
    opacity: 0;
    animation: fade-in 0.5s ease forwards;

    div:last-child{
        border-bottom: none;
    }

    @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`

const Result = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 5px;
    border-bottom: 0.58152px solid ${props => props.theme.theme.colors.borderColor};
    transition: 0.5s all;

    &:hover{
        opacity: 0.5;
    }
    div:first-child{
        width: 10%;
    }
`

const Wrap = styled.div`
    width: 35%;
`

const Search = (theme) => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const [error, setError] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
    async function searchCrypto() {
        try {
            const response = await fetch("https://api.binance.com/api/v3/ticker/price")
            const data = await response.json()
            const cryptoSymbols = data.map((symbol) => symbol.symbol)
            const similarSymbols = cryptoSymbols.filter((symbol) =>
                symbol.includes(query.toUpperCase())
            )
            if (similarSymbols.length === 0) {
                setResults([])
                setError(true)
            } else {
                const similarPrices = data.filter((item) =>
                    similarSymbols.includes(item.symbol)
                ).slice(0, 7)
                setResults(similarPrices)
                setError(false)
            }
        } catch (error) {
            console.error(`Failed to fetch data from Binance API: ${error}`)
            setError(true)
        }
    }

    if (query) {
        const timeoutId = setTimeout(searchCrypto, 600)
        return () => clearTimeout(timeoutId)
    } else {
        setResults([])
        setQuery('')
    }
    }, [query])

    function setCurrent(symbol){
        dispatch({ type: 'CHANGE_CURRENT', payload: symbol })

        setResults([])
        setQuery('')
    }

    return(
        <Box className='search'theme={theme}>
            <Icon28SearchOutline width={24} height={24} fill={theme.theme.colors.subTitleColor} />
            <input value={query} onChange={event => {
                setQuery(event.target.value)
                setError(false) // clearing the error when changing the value in the input (so that the error message does not hang even with an empty input)
            }} type="text" placeholder='Search...' />
            {results.length > 0 ? (
                <Results theme={theme}>
                    {results.map((item) => (
                        <Result theme={theme} onClick={() => setCurrent(item.symbol)} key={item.symbol}>
                            <Wrap><Icon28MoneyCircleOutline width={24} height={24} fill={theme.theme.colors.subTitleColor} /></Wrap>
                            <Wrap><Title size={14}>{item.symbol}</Title></Wrap>
                            <Wrap><Title size={14}>${parseFloat(item.price).toLocaleString('en')}</Title></Wrap>
                        </Result>
                    ))}
                </Results>
            ) : (
                error && (
                    <Results theme={theme}>
                        <Result theme={theme}>
                            <Icon28ErrorCircleOutline width={24} height={24} fill={theme.theme.colors.subTitleColor} />
                            <Title size={14}>We didn't find anything.</Title>
                        </Result>
                    </Results>
                )
            )}
        </Box>
    )
}

export default Search
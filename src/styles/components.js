import styled from "styled-components";

export const Wrapper = styled.div`
    background: ${props => props.theme.colors.backgroundColor};
    border: 0.58152px solid ${props => props.theme.colors.borderColor};;
    border-radius: 20px;
    padding: 15px;
    width: ${({ width = 'auto' }) => width};
    height: ${({ height = 'auto' }) => height};
    margin: 12px;
`

export const Inner = styled.div`
    display: flex;
    flex-direction: ${({ flexDirection = 'column' }) => flexDirection};
    align-items: ${({ alignItems = 'stretch' }) => alignItems};
    width: ${({ width = 'auto' }) => width};
    ${props => props.box && `
        width: 100%;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
    `}
    ${props => props.section && `
        width: 10%;
        gap: 4px;
    `}
`

export const Title = styled.p`
    color: ${props => props.theme.colors.textColor};
    font-size: ${({ size = 16 }) => size + 'px'};
    font-weight: ${({ weight = 600 }) => weight};
    padding-top: ${({ paddingTop = 0 }) => paddingTop + 'px'};
    padding-bottom: ${({ paddingBottom = 0 }) => paddingBottom + 'px'};
    ${props => props.up && `
        color: #06D6A0;
    `}
    ${props => props.down && `
        color: #EF476F;
    `}
    ${props => props.none && `
        color: #9ca3af;
    `}
`

export const Subtitle = styled.p`
    color: ${props => props.theme.colors.subTitleColor};
    font-size: 12px;
    font-weight: 500;
    padding-top: 4px;
`
import styled from "styled-components";

export const Wrapper = styled.div`
    background: #181920;
    border: 0.58152px solid rgba(255, 255, 255, 0.2);
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
`

export const Title = styled.p`
    color: ${({ color = '#FFFFFF' }) => color};
    font-size: ${({ size = 16 }) => size + 'px'};
    font-weight: ${({ weight = 600 }) => weight};
    padding-top: ${({ paddingTop = 0 }) => paddingTop + 'px'};
    padding-bottom: ${({ paddingBottom = 0 }) => paddingBottom + 'px'};
`

export const Subtitle = styled.p`
    color: ${({ color = '#FFFFFF' }) => color};
    opacity: 0.5;
    font-size: 12px;
    font-weight: 500;
    padding-top: 4px;
`
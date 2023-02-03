import styled from "styled-components";

export const Wrapper = styled.div`
    background: #181920;
    border: 0.58152px solid rgba(255, 255, 255, 0.2);
    border-radius: 11px;
    padding: 15px;
`

export const Title = styled.p`
    color: ${({ color = '#FFFFFF' }) => color};
    font-size: ${({ size = 16 }) => size}px;
    font-weight: ${({ weight = 700 }) => weight};
`

export const Subtitle = styled.p`
    color: ${({ color = '#FFFFFF' }) => color};
    opacity: 0.5;
    font-size: 14px;
    font-weight: 500;
    padding-top: 4px;
`
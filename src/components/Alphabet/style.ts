import styled from "styled-components";

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto auto;    
    padding: 10px;
    gap: 20px;
    text-align: center;
`;

interface GridItemProps {
    clicked?: boolean;
    disabled: boolean;
}

export const GridItem = styled.div<GridItemProps>`
    padding: 20px;
    font-size: 50px;
    text-align: center;
    cursor: pointer;
    opacity: ${props => props.clicked || props.disabled  ? "0.5" : "1"};
    pointer-events: ${props => props.disabled ? "none" : ""} ;
`;

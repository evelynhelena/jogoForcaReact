import styled from "styled-components";
export const Container = styled.div`
    background: ${props => props.theme["green-500"]};
    box-shadow: rgb(116, 58, 0) 0px -1px 4px 20px inset;
    margin-top: 50px;
    padding: 50px;
    font-family: minhafont;
    color: white;
    max-width: 1280px;
    min-width: 1280px;
    margin: 50px auto;
`;

export const BoxGame = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 60px;
    min-height: 500px;
    justify-content: center;
`;

export const ButtonStart = styled.button`
    padding: 15px;
    font-size: 50px;
    font-family: minhaFont;
    background-color: #393d38;
    border: 0;
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
    &:hover{
        box-shadow: 0 0 10px #000;
    }
`;


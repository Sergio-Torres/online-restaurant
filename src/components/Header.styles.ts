/*
    Header only styling
*/

import styled from 'styled-components';

let backgroundColor:string = '#000';
let fontColor:string = '#fff';
let red:string = '#FF0000';

export const Wrapper = styled.div`
    background-color: ${backgroundColor};
    display: flex;
    padding: 20px;
    font-family: 'Courgette', cursive;
    color: ${fontColor};

    button{
        margin: 0 0 0 auto;
        background-color: transparent;
        color: ${fontColor};
        border:none;
    }
    span{
        
        background-color: ${red};
        width: 5px;
        height: 5px;
        border-radius: 1000px;
        
        padding: 0.2rem;
    }
      
`;
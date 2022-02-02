/*
    Header style
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
        font-size:40px;
    }
    span{
        
        background-color: ${red};
        width: 5px;
        height: 5px;
        border-radius: 1000px;       
        padding: 0.2rem;
        font-size: 10px;
    }

    @media screen and (max-width: 400px){
       
        button{
            font-size:20px;
        }
      
`;
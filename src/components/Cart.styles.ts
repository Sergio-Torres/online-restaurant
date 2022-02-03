/*
    Cart style
*/
import styled from 'styled-components';

let gray:string = '#DFDFDF';
let blue:string = '#0000FF';
let white:string = '#fff';

export const customStyles ={
    content:{
        margin: 'auto',
        width:'50%',    

    }
    

};

export const Wrapper = styled.div`
    
    
    flex-direction: column;
    div{
        background-color: ${gray};
        display:flex;
        margin: 1rem;
        border: none;
        padding: 0.2rem;
        border-radius: 18px;
    }
    button{
        display: flex;
        margin: 0 0 0 auto;
        border:none;
        background-color:transparent;
        cursor: pointer;
    }

    button.buyButton{
        display: flex;
        margin: 10px 0 0 auto;
        padding:5px;
        font-size: 20px;
        width: 70px;
        height:40px;
        background-color: ${blue};
        font-family: 'Oswald', sans-serif;
        border-radius: 18px;
        color: ${white};
    }

`
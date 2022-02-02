/*
    Cart style
*/
import styled from 'styled-components';

let gray:string = '#DFDFDF';

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

`
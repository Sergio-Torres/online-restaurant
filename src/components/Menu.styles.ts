/*
    style Menu
*/
import styled from 'styled-components';

let plata:string = '#C0C0C0';
let gray:string = '#808080';

export const Wrapper = styled.div`
    display: grid;
    justify-content: center;
    flex-direction: column;
    border-radius: 20px;
    border: 1px solid ${plata};
    gap: 1em;
    grid-template-columns: repeat(4, 1fr);
    font-family: 'Oswald', sans-serif;
      
    button{
        font-family: 'Oswald', sans-serif;
        border-radius: 0 0 20px 20px;
        border: none;
        background-color: ${plata};
        transition: 0.5s;
    }

    button:hover{
        background-color: ${gray};
    }
    
    img{
        width: 250px;
        height: 200px;
        object-fit:cover;
        border-radius: 20px 20px 0 0;
    }

    div{
        display: flex;
        flex-direction: column;
        width: 250px;
        padding: 1rem;
        
    }
    @media screen and (max-width: 1200px){
        grid-template-columns: repeat(3, 1fr);
        div{
            display:flex;
            margin:auto;
    }
    @media screen and (max-width: 1000px){
        grid-template-columns: repeat(2, 1fr);

        div{
            margin: auto;
            gap: 0.2;
            
    }
    //responsive
    
    @media screen and (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
        div{
            display:flex;
            margin:auto;
    }

    @media screen and (max-width: 400px){
        div{
            width: 200px;
        }
        img{
            width: 200px;
            height: 150px;
        }
    }
`;
/*
    Header only styling
*/

import styled from 'styled-components';

let backgroundColor:string = '#000';
let fontColor:string = '#fff';

export const Wrapper = styled.div`
    background-color: ${backgroundColor};
    display: flex;
    padding: 20px;
    font-family: 'Courgette', cursive;
    color: ${fontColor};
      
`;
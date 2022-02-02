/*
    assing the values of each menu item, price, id, etc
*/
import { useState } from 'react';
//style
import {Wrapper} from './Menu.styles';
//types
import {CartItemType} from '../Types/CartItemType';

import {Header} from './Header';


type Props ={
    item:CartItemType;
    getTotalItem:(item:CartItemType)=>void;
}

export const MenuItem = ({item, getTotalItem}: Props)=>(
    <Wrapper>
        <p>{item.name}</p>
        <img src={item.img}></img>
        <p>${item.price}</p>
        <button onClick={()=>{getTotalItem(item)}}>Add to cart</button>
    </Wrapper>
    
);
/*
    assing the properties of each menu item, price, id, etc
*/

import {useState} from 'react';
//interface
import {CardItem} from '../interfaces/CardItem';



type Props ={
    item:CardItem;
}
export const MenuItem = ({item}: Props)=>(
    <div>
        <p>{item.name}</p>
        <img src={item.img}></img>
        <p>{item.price}</p>
    </div>
);
/* 
    List each menu option
*/
import {useState} from 'react';
//interface
import {CardItem} from '../interfaces/CardItem';
//components
import {MenuItem} from './MenuItem';
//style
import {Wrapper} from './Menu.styles';
//images
import pollo from '../images/pollo.png';
import arepa from '../images/arepa.jpg';
import chocolate from '../images/chocolate.jpeg';
import hamburguesa from '../images/hamburguesa.jpg';
import italiano from '../images/italiano.jpg';
import sandwichDoble from '../images/sandwichDoble.jpeg';
import  sandwichJamon from '../images/sandwichJamon.png';
import soda from '../images/soda.jpg';

export default function Menu(){
    
    const [items, setIte] = useState<CardItem[]>([
        {
            id: 1234,
            name: 'Chicken broaster',
            img: pollo,
            price: 13
        },
        {
            id: 2124,
            name: 'Colombian arepas',
            img: arepa,
            price: 6
        },
        {
            id: 1344,
            name: 'Chocolate',
            img: chocolate,
            price: 3
        },
        {
            id: 1235,
            name: 'Burger',
            img: hamburguesa,
            price: 12
        },
        {
            id: 7713,
            name: 'Italian sandwich',
            img: italiano,
            price: 15
        },
        {
            id: 1885,
            name: 'Doble sandwich',
            img: sandwichDoble,
            price: 10
        },
        {
            id: 9371,
            name: 'Ham sandwich',
            img: sandwichJamon,
            price: 12
        },
        {
            id: 6356,
            name: 'Soda',
            img: soda,
            price: 4
        },
    ])
    return(
        <Wrapper>
            {items?.map(item=>(
                <div key={item.id}>
                    <MenuItem item={item}/>
                </div>
            ))}
        </Wrapper>
    )
}


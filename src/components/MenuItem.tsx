/*
    assing the properties of each menu item, price, id, etc
*/

//style
import {Wrapper} from './Menu.styles';
//interface
import {CardItem} from '../interfaces/CardItem';



type Props ={
    item:CardItem;
}
export const MenuItem = ({item}: Props)=>(
    <Wrapper>
        <p>{item.name}</p>
        <img src={item.img}></img>
        <p>${item.price}</p>
        <button>Add to card</button>
    </Wrapper>
    
);
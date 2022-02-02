//Style
import { Wrapper } from "./Header.styles";
//Icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUtensils} from '@fortawesome/free-solid-svg-icons';
import {faOpencart} from '@fortawesome/free-brands-svg-icons';

//import {getTotalItem} from './MenuItem';

type Props = {
    totalItem: number;
    handlerShowCart: ()=>void;
}

export const Header = ({totalItem, handlerShowCart}: Props) =>(
    <Wrapper>
       
        <h1>Restaurant</h1>
        <FontAwesomeIcon icon={faUtensils} style={{fontSize:'40px', padding:'15px'}}/>
        <button onClick={()=>{handlerShowCart()}}>
            <FontAwesomeIcon icon={faOpencart} style={{fontSize:'40px'}}/>
            <span>{totalItem}</span>
        </button>    
    </Wrapper>
);


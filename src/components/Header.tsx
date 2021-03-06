//Style
import { Wrapper } from "./Header.styles";
//Icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUtensils} from '@fortawesome/free-solid-svg-icons';
import {faOpencart} from '@fortawesome/free-brands-svg-icons';

import logo from '../images/logo.png';

type Props = {
    totalItem: number;
    handlerShowCart: ()=>void;
}

export const Header = ({totalItem, handlerShowCart}: Props) =>(
    <Wrapper>
       
        <h1>Restaurant</h1>
        <img src={logo}/>
        <button onClick={()=>{handlerShowCart()}}>
            <FontAwesomeIcon icon={faOpencart}/>
            <span>{totalItem}</span>
        </button>    
    </Wrapper>
);


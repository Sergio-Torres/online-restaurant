//Style
import { Wrapper } from "./Header.styles";
//Icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUtensils} from '@fortawesome/free-solid-svg-icons';


export const Header = () =>(
    <Wrapper>
        <h1>Restaurant</h1>
        <FontAwesomeIcon icon={faUtensils} style={{fontSize:'40px', padding:'15px'}}/>
    </Wrapper>
);


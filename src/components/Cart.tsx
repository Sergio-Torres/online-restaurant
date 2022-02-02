import { CartItemType } from "../Types/CartItemType";
//style
import Modal from 'react-modal';
import {customStyles, Wrapper} from './Cart.styles';
//icon
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

type Props={
    totalPrice: number;
    cartContent: CartItemType[] | undefined;
    handlerShowCart: ()=>void;
}
export const Cart = ({totalPrice, cartContent, handlerShowCart}: Props) =>{
    
    
    return(
        <Modal isOpen={true} style={customStyles}>
            <Wrapper>
                <button  onClick={()=>{handlerShowCart()}} style={{fontSize:'20px'}}>
                    <FontAwesomeIcon icon={faTimesCircle}/>
                </button>
                {cartContent?.map(item=>(
                <div key={item.id}>
                    <p>{item.name}: ${item.price}</p>
                    <button  onClick={()=>{handlerShowCart()}}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </button>
                </div>   
                ))}
                <div>
                    <h3>Total: ${totalPrice}</h3>
                </div>
            </Wrapper>              
            
        </Modal>
            
    );
}
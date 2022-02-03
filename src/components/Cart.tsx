/*
    The modal display the cart Items
*/
import { CartItemType } from "../Types/CartItemType";
//style
import Modal from 'react-modal';
import {customStyles, Wrapper} from './Cart.styles';
//icon
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faTimesCircle, faHandHoldingUsd} from '@fortawesome/free-solid-svg-icons';

type Props={
    totalPrice: number;
    cartContent: CartItemType[] | undefined;
    handlerShowCart: ()=>void;
    deleteCartItem:(item:CartItemType)=>void;
}

export const Cart = ({totalPrice, 
                    cartContent, 
                    handlerShowCart,
                    deleteCartItem}: Props) =>{
    
    return(
        <Modal isOpen={true} style={customStyles}>
            <Wrapper>
                <button  onClick={()=>{handlerShowCart()}} style={{fontSize:'20px'}}>
                    <FontAwesomeIcon icon={faTimesCircle}/>
                </button>
                {cartContent?.map(item=>(
                <div key={item.id}>
                    <p>{item.name}: ${item.price}</p>
                    <button  onClick={()=>{deleteCartItem(item)}}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </button>
                </div>   
                ))}
                <div>
                    <h3>Total: ${totalPrice}</h3>
                    <button className="buyButton" 
                    onClick={()=>{alert('Thank you for shopping in our restaurant')}}>
                    Buy
                         <FontAwesomeIcon icon={faHandHoldingUsd}/>
                    </button>
                </div>
            </Wrapper>              
            
        </Modal>
            
    );
}
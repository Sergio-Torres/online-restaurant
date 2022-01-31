import { CartItemType } from "../Types/CartItemType";

type Props={
    totalPrice: number;
    cartContent: CartItemType[] | undefined;
}
export const Cart = ({totalPrice, cartContent}: Props) =>{
    return(
    <div>
        {/*ponerle un ancho de unos 15rem */}
        {cartContent?.map(item=>(
            <div key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
            </div>   
        ))}
        <h3>Total ${totalPrice}</h3>
    </div>
    );
}
import {useState} from 'react';
import logo from './logo.svg';
//Components
import {Header} from './components/Header';
import {Cart} from "./components/Cart";
import Menu from './components/Menu';
//types
import {CartItemType} from './Types/CartItemType';
//style
import {Wrapper} from './App.styles'

function App() {

  const getCurrentTimestamp =():number => new Date().getTime();

  const [totalItem, setTotalItem] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const [showCart, setShowCart] = useState<boolean>(false);
  const [cartContent,  setCartContent] = useState<CartItemType[]>([]);
  
  const getTotalItem = (item:CartItemType):void=>{
      setTotalItem(totalItem+item.amount);
      setTotalPrice(totalPrice+item.price);
      //change id
      setCartContent([...cartContent, {...item, id:getCurrentTimestamp()}]);
    
  }

  
  const handlerShowCart=():void=>{
    setShowCart(!showCart);
    console.log('mostrat el carro ', showCart);
  }
  return (
      <Wrapper>
        <header>
          <Header totalItem={totalItem} handlerShowCart={handlerShowCart}/>
        </header>
        <div className="Cart">
          {showCart? <Cart 
                    totalPrice={totalPrice}  
                    cartContent={cartContent}
                    handlerShowCart={handlerShowCart}/>
                    : <span></span>} {/*if false, return an empty span*/}

        </div>
        <div className="Menu">
          <Menu getTotalItem={getTotalItem}/>
        </div>
      </Wrapper>
  );
}

export default App;

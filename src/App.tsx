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

  
  const [totalItem, setTotalItem] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [showCart, setShowCart] = useState<boolean>(false);
  const [cartContent,  setCartContent] = useState<CartItemType[]>([]);
  
  const getTotalItem = (item:CartItemType):void=>{
      setTotalItem(totalItem+item.amount);
      setTotalPrice(totalPrice+item.price);
      setCartContent([...cartContent, item]);
    
  }
  return (
      <Wrapper>
        <header>
          <Header totalItem={totalItem}/>
          {showCart? <Cart totalPrice={totalPrice} cartContent={cartContent}/>: <span></span>}
        </header>
        <main>
          <Menu getTotalItem={getTotalItem}/>
          slider
        </main>
      </Wrapper>
  );
}

export default App;

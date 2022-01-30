import {useState} from 'react';
import logo from './logo.svg';

//Components
import {Header} from './components/Header';
import Menu from './components/Menu';

//style
import {Wrapper} from './App.styles'

function App() {
  
  const [totalItem, setTotalItem] = useState<number>(0);

  const getTotalItem = (item:number):void=>{
      setTotalItem(totalItem+1);
    
  }
  return (
      <Wrapper>
        <header>
          <Header totalItem={totalItem}/>
        </header>
        <main>
          <Menu getTotalItem={getTotalItem}/>
          slider
        </main>
      </Wrapper>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
//import './App.css';

//Components
import {Header} from './components/Header';
import Menu from './components/Menu';

//style
import {Wrapper} from './App.styles'

function App() {

  return (
      <Wrapper>
        <header>
          <Header/>
        </header>
        <main className='menu'>
          <Menu />
          slider
        </main>
      </Wrapper>
  );
}

export default App;

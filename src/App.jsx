import React from 'react';
import { products } from './products/products';
import Store from './components/Store';


function App() {
  return (
    <>
      <Store cards={products}/>
    </>
  );
}

export default App;

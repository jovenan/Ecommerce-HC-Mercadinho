import React from "react";
import HeaderCart from './../../components/HeaderCart';
import SecaoProdutosCart from './../../components/secaoProdutosCart';
import SecaoInfosCart from './../../components/secaoInfosCart';

function App() {
    return (
      <>
        <HeaderCart />
        <main>
          <SecaoProdutosCart />
          <SecaoInfosCart />
        </main>
      </>
    );
}
  
export default App;
  
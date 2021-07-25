import React from "react";
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import Principal from './../../components/principal';
import SecaoProdutos from './../../components/secaoProdutos'


function App() {
  return (
      <>
        <Header />
        <main>
          <Principal />
          <SecaoProdutos />
        </main>
        <Footer />
      </>
    );
}
  
export default App;

import React, {useEffect, useState} from 'react';
import * as S from './styled';
import ProdutosDB from "./../../Database";

export default function App() {
  const [produtos, setProdutos] = useState([]);

  const handleComprar = (id) => {

    const item = produtos.filter((produto) => {
      if (Number(produto.id) === Number(id)) {
        return produto;
      }
    })[0];

    const carrinho = JSON.parse(localStorage.getItem('Carrinho'))
    if(carrinho == null){
      localStorage.setItem('Carrinho', '[]')
    }

    const temNoCarrinho = carrinho.find((produto,index) => {
      if (produto.id === item.id) {
        produto['index'] = index;
        return produto;
      }
    })

    const newProduto = {
      "id": item.id,
      "name": item.name,
      "image": item.image,
      "price": item.price,
      "quant": 1
    }
    
    if (temNoCarrinho !== undefined ) {
      temNoCarrinho.quant += 1
      carrinho[temNoCarrinho.index] = temNoCarrinho
      localStorage.setItem('Carrinho', JSON.stringify(carrinho))
    } else {
      carrinho.push(newProduto)
      localStorage.setItem('Carrinho', JSON.stringify(carrinho))
    }
    alert("Item adicionado ao carrinho!")
  }

  useEffect(() => {
    const carrinho = JSON.parse(localStorage.getItem('Carrinho'))
    if(carrinho == null){
      localStorage.setItem('Carrinho', '[]')
    }
    setProdutos(ProdutosDB)
  }, [])

    return (
      <>
        <S.divProdutos>
          <h2>Aproveite as ofertas!</h2>
          <S.ContainerInferior>
              {
                produtos.map(produto => {
                  return (
                    <div key={produto.id}>
                        <img src={produto.image} alt={produto.name} width="250" height="250" />
                        <p>{produto.name}</p>
                        <p>R$ {produto.price}</p>
                        <button type="button" value={produto.id} onClick={(e) => handleComprar(e.target.value)}>Comprar</button>
                    </div>
                  )
                })
              }
          </S.ContainerInferior>
        </S.divProdutos>
      </>
    );
}

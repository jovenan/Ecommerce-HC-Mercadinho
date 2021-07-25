import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import * as S from './styled';

export default function App() {
    const [produtos, setProdutos] = useState([]);

    const handleAdicionarQuant = (id) => {
        const carrinho = produtos;

        const temNoCarrinho = carrinho.find((produto) => {
            if (Number(produto.id) === Number(id)) {
                return produto;
            }
        })
        if (temNoCarrinho.quant < 50) {
            temNoCarrinho.quant += 1
            carrinho[temNoCarrinho.index] = temNoCarrinho
            localStorage.setItem('Carrinho', JSON.stringify(carrinho))
            setProdutos(JSON.parse(localStorage.getItem('Carrinho')));
        }
    }

    const handleDiminuirQuant = (id) => {
        const carrinho = produtos;

        const temNoCarrinho = carrinho.find((produto) => {
            if (Number(produto.id) === Number(id)) {
                return produto;
            }
        })
        
        if (temNoCarrinho.quant > 1) {
            temNoCarrinho.quant -= 1
            carrinho[temNoCarrinho.index] = temNoCarrinho
            localStorage.setItem('Carrinho', JSON.stringify(carrinho))
            setProdutos(JSON.parse(localStorage.getItem('Carrinho')));
        }
    }

    const handleRemoverProduto = (id) => {
        const carrinho = produtos;

        const temNoCarrinho = carrinho.find((produto, index) => {
            produto["index"] = index;
            if (Number(produto.id) === Number(id)) {
                return produto;
            }
        })

        carrinho.splice(temNoCarrinho.index, 1);
        localStorage.setItem('Carrinho', JSON.stringify(carrinho))
        setProdutos(JSON.parse(localStorage.getItem('Carrinho')));

    }

    useEffect(() => {
        setProdutos(JSON.parse(localStorage.getItem('Carrinho')));
    }, [])

    return (
        <S.ProductsSection>
        <h1>Sacola</h1>
        <S.ContainerInferior>
            <div className="cabeçalhos">
                <div className="divImagem"></div>
                <div className="divNome">
                    <p>Produto</p>
                </div>
                <div className="divPreco">
                    <p>Preço</p>
                </div>
                <div className="divQuantidade">
                    <p>Quantidade</p>
                </div>
                <div className="divTotal">
                    <p>Total</p>
                </div>
                <div className="divRemover"></div>
            </div>
                {
                    produtos.map((produto) => {
                        return (
                            <div key={produto.id}>
                                <div className="divImagem">
                                    <img src={produto.image} alt={produto.name} width="100" height="100" />
                                </div>
                                <div className="divNome">
                                    <p>{produto.name}</p>
                                </div>
                                <div className="divPreco">
                                    <p>R$ {produto.price}</p>
                                </div>
                                <div className="divQuantidade">
                                    <button className="btnQuant btnMenos" type="button" value={produto.id} onClick={(e) => handleDiminuirQuant(e.target.value)}>-</button>
                                    <p>{produto.quant}</p>
                                    <button className="btnQuant btnMais" type="button" value={produto.id} onClick={(e) => handleAdicionarQuant(e.target.value)}>+</button>
                                </div>
                                <div className="divTotal">
                                    <p>R$ {(produto.quant * produto.price).toFixed(2)}</p>
                                </div>
                                <div className="divRemover">
                                    <button className="btnRemover" type="button" value={produto.id} onClick={(e) => handleRemoverProduto(e.target.value)}>X</button>
                                </div>
                            </div>
                        )
                    })
                }
        </S.ContainerInferior>
        </S.ProductsSection>
    );
}
import React from "react";
import { useHistory } from "react-router";
import * as S from './styled';

export default function App() {
  const history = useHistory();

  const handleVoltar = () => {
    history.push('/')
  }
  const handleFinalizar = () => {
    const carrinho = localStorage.getItem("Carrinho")
    if(carrinho !== '[]') {
      const Login = JSON.parse(localStorage.getItem("Login"))
      if (Login !== false) {
        localStorage.setItem('Carrinho', '[]')
        alert('Compra Realizada!')
        history.push('/')
      } else {
        alert('Efetue o Login para realizar a compra!')
        history.push('/login')
      }
      
    } else {
      alert('Coloque algo no carrinho!')
      history.push('/')
    }

  }

    return (
      <>
        <S.ContainerInfosInferior>
          <div>
            <button type="button" onClick={handleVoltar} id="btnVoltar">Continuar Comprando</button>
          </div>
          <div className="divFinalizar">
            <button type="button" onClick={handleFinalizar} id="btnVoltar">Finalizar Compra</button>
          </div>
        </S.ContainerInfosInferior>
      </>
    );
}
  
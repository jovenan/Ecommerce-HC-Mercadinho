import React,{ useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function App() {
  const history = useHistory();
  const [login, setLogin] = useState(''); 

  const handleMinicart = () => {
    history.push('/cart');
  }
  const handleCadastrar = () => {
    history.push('/cadastrar');
  }
  const handleLogin = () => {
    history.push('/login');
  }
  const handleDeslogar = () => {
    localStorage.setItem('Login', 'false');
    history.push('/login');
  }

  useEffect(() => {
    let Login = JSON.parse(localStorage.getItem('Login'))
    if(Login === null){
      localStorage.setItem('Login', 'false')
      Login = false;
    }
    setLogin(Login);
  }, [])

    return (
      <>
        <S.Header id="principal">
            <img src='/image/logo.png' alt="logotipo" />
            <div>
              {login ? <><p className="Logado">Bem Vindo, {login.name}!</p> <p className="Deslogar" onClick={handleDeslogar}><img src="image/sair.png" alt="Sair" /></p></> : <p className="Cadastrar" onClick={handleLogin}>Login</p> }
              <p className="Cadastrar" onClick={handleCadastrar}>Cadastrar</p>
              <img onClick={handleMinicart} id="cart" src="/image/shopping-cart_icon-icons.com_56125.svg" alt="cart" />
            </div>
        </S.Header>
      </>
    );
}

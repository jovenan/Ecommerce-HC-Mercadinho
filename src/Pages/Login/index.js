import React, {useState,useEffect} from "react";
import * as S from './styled'
import { useHistory } from "react-router";


function App() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');


  function handleEntrar(e) {
    e.preventDefault();

    const Cadastros = JSON.parse(localStorage.getItem('Cadastros'))
    if(Cadastros == null){
      localStorage.setItem('Cadastros', '[]')
    }

    const cadastroExiste = Cadastros.find((cadastro) => {
        if(cadastro.email === email) {
            return true;
        }
    })

    if (cadastroExiste !== undefined && cadastroExiste.password === senha) {
        document.querySelector('.mensagem').style.color = "green";
        localStorage.setItem('Login', JSON.stringify(cadastroExiste))
        setMensagem('Login efetuado com sucesso!');
        setTimeout(() => {
            history.push('/')
        }, 1500);
    } else {
      document.querySelector('.mensagem').style.color = "red";
      setMensagem('Verifique os dados Inseridos.');
    }
    setTimeout(() => {
      setMensagem("");
    }, 1500);
    
  }

  const handleVoltar = () => {
    history.push('/');
  }
  const handleCadastrar = () => {
    history.push('/cadastrar');
  }

  useEffect(() => {
    const Cadastros = JSON.parse(localStorage.getItem('Cadastros'))
    if(Cadastros == null){
      localStorage.setItem('Cadastros', '[]')
    }
  },[])
  return (
      <S.Fundo>
        <h3>Insira seus dados: </h3>
        <form>
          <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
          <input type="text" name="senha" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required placeholder="Senha" />
          <input type="submit" value="Entrar" name='btnEntrar' id="btnEnviar" onClick={(e) => handleEntrar(e)} />
          <S.Mensagem className="mensagem">{mensagem}</S.Mensagem>
          <p>Ainda não se cadastrou? <p onClick={handleCadastrar}>Clique aqui</p></p>
        </form>
        <div>
          <button type="button" onClick={handleVoltar} id="btnVoltar">Continuar Comprando</button>
        </div>
      </S.Fundo>
    );
}
  
export default App;

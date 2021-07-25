import React, {useState,useEffect} from "react";
import * as S from './styled'
import { useHistory } from "react-router";

function App() {
  const history = useHistory();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [CEP, setCEP] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [mensagem, setMensagem] = useState('');

  function validateEmail(email) {
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if (reg.test(email)) {
      return true; }
    else {
      return false;
    }
  } 

  function handleEnviar(e) {
    e.preventDefault();

    const Cadastros = JSON.parse(localStorage.getItem('Cadastros'))
    if(Cadastros == null){
      localStorage.setItem('Cadastros', '[]')
    }

    if (nome !== '' && validateEmail(email) && senha !== '' && CEP !== '' && logradouro !== '' && numero !== '' && bairro !== '' && cidade !== '' && estado !== '') {
      const dado = {
        "name": nome,
        "email": email,
        "password": senha,
        "CEP": CEP,
        "logradouro": logradouro,
        "numero": numero,
        "bairro": bairro,
        "cidade": cidade,
        "estado": estado
      };

      Cadastros.push(dado)
      localStorage.setItem(`Cadastros`, JSON.stringify(Cadastros));
      setNome('');
      setEmail('');
      setSenha('');
      setSenha('');
      setCEP('');
      setLogradouro('');
      setNumero('');
      setBairro('');
      setCidade('');
      setEstado('');
      document.querySelector('.mensagem').style.color = "green";
      setMensagem('Cadastrado com sucesso!');
      localStorage.setItem('Login', JSON.stringify(dado))
      setTimeout(() => {
        history.push('/')
      }, 3000);
    } else {
      document.querySelector('.mensagem').style.color = "red";
      setMensagem('Verifique os dados Inseridos.');
    }
    setTimeout(() => {
      setMensagem("");
    }, 5000);
    
  }

  const handleVoltar = () => {
    history.push('/');
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
          <input type="text" name="Nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required placeholder="Nome" />
          <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
          <input type="text" name="senha" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required placeholder="Senha" />
          <input type="text" name="CEP" id="CEP" value={CEP} onChange={(e) => setCEP(e.target.value)} required placeholder="CEP" />
          <input type="text" name="Logradouro" id="Logradouro" value={logradouro} onChange={(e) => setLogradouro(e.target.value)} required placeholder="Logradouro" />
          <input type="text" name="Numero" id="Numero" value={numero} onChange={(e) => setNumero(e.target.value)} required placeholder="Numero" />
          <input type="text" name="Bairro" id="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} required placeholder="Bairro" />
          <input type="text" name="Cidade" id="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} required placeholder="Cidade" />
          <input type="text" name="Estado" id="Estado" value={estado} onChange={(e) => setEstado(e.target.value)} required placeholder="Estado" />
          <input type="submit" value="Enviar" name='btnEnviar' id="btnEnviar" onClick={(e) => handleEnviar(e)} />
          <S.Mensagem className="mensagem">{mensagem}</S.Mensagem>
        </form>
        <div>
          <button type="button" onClick={handleVoltar} id="btnVoltar">Continuar Comprando</button>
        </div>
      </S.Fundo>
    );
}
  
export default App;

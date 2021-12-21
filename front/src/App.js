import React, { useEffect, useState } from 'react'
import './App.css';
import './Components/Header/Header.js'
import Header from './Components/Header/Header.js';
import Body from './Components/Body/Body.js';
import Manager from './Components/Manager/Manager.js';
import Axios from "axios";



function App() {
  const [conteudo, setConteudo] = useState("");
  useEffect(() => {
    setConteudo("logo");
  }, []); 

  function alterarConteudo(value) {
    setConteudo(value);
  };


  return (
    <div className="appContent">
      <div className="appBody">
        <Header conteudo={conteudo} setStateConteudo={alterarConteudo}></Header>
        <div className={conteudo==="logo"? "":"none"}>
        <Body></Body>
        </div>
        <div className={conteudo==="login"? "":"none"}>
        <Manager></Manager>
        </div>
      </div>
    </div>
  );
}

export default App;

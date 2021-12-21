import React, { useState, Component, useEffect } from 'react'
// import React from 'react'
import './Manager.css';
import Moderator from './Moderator';
import Administrator from './Administrator';
import Register from './Register';

import Axios from 'axios';


// var t;

function Manager(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logado, setLogado] = useState("");
  const [logadotype, setLogadotype] = useState("");

  let moderatorCode;
  let administratorCode;
  let registerCode;

  useEffect(() => {
    if(logado){
      setLogadotype(logado.data[0].usertype);
    }
  }, [logado]); 

  function formclickRegister(event) {
      Axios.post("http://localhost:3000/register",{
        username: username,
        password: password,
      }).then((response)=>{   
        if (response.status == 200) {
          setLogadotype("register");
        }else{
          alert("ocorreu algum erro");
        }
      });    
    
  }



  function formclick(event) {  
        Axios.post("http://localhost:3000/login",{
          username: username,
          password: password,
        }).then((response)=>{     
          setLogado(response);
        });    
      }


      function loginaddValues(event) {
        let u = event.target.value;
        setUsername(u);
          
      }
      function passwordaddValues(event) {
        let p = event.target.value;
        setPassword(p);
      }

      if (logadotype==="moderator") {
        moderatorCode = <Moderator logado={logado}></Moderator>;
      }else{
        moderatorCode = "";
      }

      if (logadotype==="admin") {
        administratorCode = <Administrator logado={logado}></Administrator>;
      }else{
        administratorCode = "";
      }

      
      function alterarLogadoType(value) {
        setLogadotype(value);
      };
      
      if (logadotype==="register") {
        registerCode = <Register setStateLogadoType={alterarLogadoType}></Register>;
      }else{
        registerCode = "";
      }
      

  return (
    <div className="appBody">
        <div className={logadotype===""? "loginBody":"hide"}>
            <form className="loginForm">
              <label>
              <div className="formTxt">Login</div>         
              <input type="text" name="name" className="loginUser"
              placeholder="UserName" onChange={loginaddValues}/>
              </label>
              <label>
                  <div className="formTxt">Senha</div>     
              <input type="password" name="password" className="loginUser"
              placeholder="Password" onChange={passwordaddValues}/>
              </label>
              <label>    
                  <div></div> 
              <input type="button" value="Logar" className="btnLogin" onClick={formclick}/>

              <input type="button" value="Registrar" className="btnRegister" onClick={formclickRegister}/>
              </label>
            </form>
        </div>

        <div className={logadotype==="moderator"? "":"hide"}>
         {moderatorCode}
        </div>
        <div className={logadotype==="admin"? "":"hide"}>
         {administratorCode}
        </div>
        <div className={logadotype==="register"? "":"hide"}>
         {registerCode}
        </div>
        
      
    </div>
  );
}


export default Manager;

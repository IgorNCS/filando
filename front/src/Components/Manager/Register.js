import React, { useState, Component, useEffect } from 'react'
// import React from 'react'
import './Register.css';

import Axios from 'axios';


// var t;

function Register(props) {
    const [nameestab, setNameEstab] = useState("");
    const [localestab, setLocalEstab] = useState("");
    const [imageestab, setImageEstab] = useState("");
    const [typeestab, setTypeEstab] = useState("");
    
    let x;
    let y;

    useEffect(() => {
        setTypeEstab("restaurante");
      }, []); 

    function nameestabnaddValues(event) {
        let u = event.target.value;
        setNameEstab(u);
      }
      function localestabnaddValues(event) {
        let u = event.target.value;
        setLocalEstab(u);
      }
      function typeestabnaddValues(event) {
        let u = event.target.value;
        setTypeEstab(u);
      }
      function imageestabnaddValues(event) {
        let u = event.target.value;
        setImageEstab(u);
      }

    function btnRegisterClick() {
              Axios.post("http://localhost:3000/registerestab",{
              nameestab: nameestab,
              localestab:localestab,
              typeestab:typeestab,
              imageestab:imageestab,
      }).then((response)=>{
        if(response.status == 200){
          alert("Estabelecimento enviado para analise! Obrigado pelo cadastro!");
          props.setStateLogadoType("");
        }else{
          alert("Ocorreu algum problema :(");
        }
        
      });
    }
    




  
  return (
    <div className="appBody">

        <div className="registerBody">
            <form className="registerForm">
        <div className="formRegisterTitle" >Dados do Estabelecimento:</div>    
              <label>
              <div className="formRegisterTxt">Nome do Estabelecimento</div>         
              <input type="text" name="nameestab" className="registerBoxTxt"
              placeholder="Ex: Cantina Volpi Pituba" onChange={nameestabnaddValues}/>
              </label>
              <label>
              <div className="formRegisterTxt">Local do Estabelecimento</div>         
              <input type="text" name="localestab" className="registerBoxTxt"
              placeholder="Ex: Rua Miguel Navarro Y Cañizares, 423 - Pituba, Salvador - BA, 41810-215" onChange={localestabnaddValues}/>
              </label>
              <label>
              <div className="formRegisterTxt">URL da imagem do Estabelecimento</div>         
              <input type="text" name="imageestab" className="registerBoxTxt"
              placeholder="Ex: http://4.bp.blogspot.com/-XKUOQO_NYUo/ULVNrcoBmgI/AAAAAAAANKg/nDkJftR4Gnw/s1600/Cantina_Volpi-Fachada_Pituba.jpg"
              onChange={imageestabnaddValues}/>
              </label>
              <label>
              <div className="formRegisterTxt">Tipo do Estabelecimento</div>         
                <select onChange={typeestabnaddValues} className="registerBoxTxt">
                    <option selected value="restaurante">Restaurante</option>
                    <option value="lachonete">Lanchonete</option>
                    <option value="loterica">Loterica</option>
                    <option value="cinema">Cinema</option>
                </select>
              </label>


              <label>    
                  <div></div> 
              <input type="button" value="Enviar Registro" className="btnSendRegister" onClick={btnRegisterClick}/>


              </label>
            </form>
        </div>   
        {x}
        
      
    </div>
    
  );
}


export default Register;

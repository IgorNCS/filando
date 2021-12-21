import React, { useState, Component, useEffect } from 'react'
// import React from 'react'
import './Moderator.css';

import Axios from 'axios';


// var t;

function Moderator(props) {
    const logado = props.logado;
    const logadodata = logado.data[0];
    const [estabmod, setEstabmod] = useState("");
    let x;
    let y;
    useEffect(() => {
      Axios.post("http://localhost:3000/mod",{
        idestabelecimento: logadodata.usermoderator,
      }).then((response)=>{
        console.log(response.data[0]);
        setEstabmod(response.data[0]);   
      });
    }, [props]); 



    function btnChangeClick(event) {
      Axios.put("http://localhost:3000/changestatus",{
        newstatus: event.target.value,
        estabchange: estabmod,
      }).then((response)=>{
        if(response.status == 200){
          Axios.post("http://localhost:3000/mod",{
          idestabelecimento: logadodata,
        }).then((response)=>{
          console.log(response);
          setEstabmod(response);   
        });
        }

      });

    }

    if(logadodata.usertype==="moderator"){


    if(estabmod.status=="vazio"){
        y = "cardSearch vazio";
      } if (estabmod.status=="cheio") {
        y = "cardSearch cheio";
      } if(estabmod.status=="moderado") {
        y = "cardSearch moderado";
      }
    x = <div className={y}>
            <img 
              className="cardImage"
              src= {estabmod.imagem}
              alt="new"
            />
            <div className="cardText">
                <div className="cardName">
                  {estabmod.nome}
                </div>
                <div className="cardAdress">
                <div className="cardChangeStatus">
                  Alterar Status:
                </div>
                <div className="cardChangeStatus">
                  <button className="btnvazio" onClick={btnChangeClick} value="vazio"> Vazio</button>
                  <button className="btnmoderado" onClick={btnChangeClick} value="moderado"> Moderado</button>
                  <button className="btncheio" onClick={btnChangeClick} value="cheio"> Cheio</button>
                  </div>
                </div>
            </div>
            <div className="cardStatus">
              <div className={estabmod.status==="vazio"? "statusGreen":"hideColor"}>
                {estabmod.status}
              </div>
              <div className={estabmod.status==="cheio"? "statusRed":"hideColor"}>
                {estabmod.status}
              </div>
              <div className={estabmod.status==="moderado"? "statusOrange":"hideColor"}>
                {estabmod.status}
              </div>
            </div>
             
  </div>;

}
  
  return (
    <div className="appBody">
        
        {x}
        
      
    </div>
  );
}


export default Moderator;

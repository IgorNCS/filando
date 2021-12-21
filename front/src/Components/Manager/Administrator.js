import React, { useState, Component, useEffect } from 'react'
// import React from 'react'
import './Moderator.css';
import './Administrator.css';

import Axios from 'axios';
import axios from 'axios';


// var t;

function Administrator(props) {
    const logado = props.logado;
    const logadodata = logado.data[0].username;
    const [estabs, setEstabs] = useState("");
    const [newestabs, setNewEstabs] = useState("");
    const [adminMod, setAdminMod] = useState("");
    let x;
    let y;
    let n;

    useEffect(() => {
      Axios.post("http://localhost:3000/admin",{
      }).then((response)=>{
        setEstabs(response.data);   
      });

      Axios.post("http://localhost:3000/newsestab",{
      }).then((response)=>{
        setNewEstabs(response.data);   
      });
    }, [props]); 

    useEffect(() => {
      setAdminMod("changes");
    }, []);


    // useEffect(() => {
    //   Axios.post("http://localhost:3000/newsestab",{
    //   }).then((response)=>{
    //     setNewEstabs(response.data);   
    //   });
    // }, []);
    

    


    function btnChangeClickNews(event) {
      if (event.target.value == "aceitar"){
        Axios.post("http://localhost:3000/acceptnewsestab",{
          newestabid:event.target.id,
      }).then((response)=>{
        if(response.status == 200){
          alert("Aceito com sucesso!");
          Axios.post("http://localhost:3000/newestab",{
      }).then((response)=>{
        setNewEstabs(response.data); 
        console.log(newestabs); 
      });

      Axios.put("http://localhost:3000/denynewsestab",{
          newestabid:event.target.id,
      }).then((response)=>{
        console.log(response);
        if(response.status == 200){
          Axios.post("http://localhost:3000/newestab",{
          }).then((response)=>{
            setNewEstabs(response.data);
            console.log(newestabs);  
          });
        }else{
          console.log("Nao foi removido do banco de pre estabelecimentos")
        }  
      });
        }else{
          alert("Ocorreu algum problema!");
        }  
      });
      }
      else{
        Axios.put("http://localhost:3000/denynewsestab",{ //REMOVER DO PUT E COLOCAR DELETE QUANDO DESCOBRIR O PROBLEMA
          newestabid:event.target.id,    
      }).then((response)=>{
        if(response.status == 200){
          Axios.post("http://localhost:3000/newestab",{
          }).then((response)=>{
            setNewEstabs(response.data); 
          });
        }else{
          alert("Ocorreu algum problema!");
        }  
      });
        
      }
    }


    function btnChangeClickAdmin(event) {
      Axios.put("http://localhost:3000/changestatusadmin",{
        newstatusadm: event.target.value,
        estabchangeadm: event.target.id,
      }).then((response)=>{
        if(response.status == 200){
          Axios.post("http://localhost:3000/admin",{
      }).then((response)=>{
        setEstabs(response.data);   
      });
        }
      });

    }
    if(logadodata=="admin"){
    if (estabs && estabs.length>0) {
      estabs.forEach(function(element) {
        if (x) {
          if(element.status=="vazio"){
            y = "cardSearch vazio";
          } if (element.status=="cheio") {
            y = "cardSearch cheio";
          } if(element.status=="moderado") {
            y = "cardSearch moderado";
          }
          x = [x,
            <div className={y}>
            <img 
              className="cardImage"
              src= {element.imagem}
              alt="new"
            />
            <div className="cardText">
                <div className="cardName">
                  {element.nome}
                </div>
                <div className="cardAdress">
                <div className="cardChangeStatus">
                Alterar Status:
                </div>
                <div className="cardChangeStatus">
                  <button className="btnvazio" onClick={btnChangeClickAdmin} value="vazio" id={element.idestabelecimento}> Vazio</button>
                  <button className="btnmoderado" onClick={btnChangeClickAdmin} value="moderado" id={element.idestabelecimento}> Moderado</button>
                  <button className="btncheio" onClick={btnChangeClickAdmin} value="cheio" id={element.idestabelecimento}> Cheio</button>
                  </div>
                </div>
            </div>
            <div className="cardStatus">
              <div className={element.status==="vazio"? "statusGreen":"hideColor"}>
                {element.status}
              </div>
              <div className={element.status==="cheio"? "statusRed":"hideColor"}>
                {element.status}
              </div>
              <div className={element.status==="moderado"? "statusOrange":"hideColor"}>
                {element.status}
              </div>
            </div>
             
  </div>];
        }else{
          if(element.status=="vazio"){
            y = "cardSearch vazio";
          } if (element.status=="cheio") {
            y = "cardSearch cheio";
          } if(element.status=="moderado") {
            y = "cardSearch moderado";
          }
        x = <div className={y}>
                <img 
                  className="cardImage"
                  src= {element.imagem}
                  alt="new"
                />
                <div className="cardText">
                    <div className="cardName">
                      {element.nome}
                    </div>
                    <div className="cardAdress">
                    <div className="cardChangeStatus">
                Alterar Status:
                </div>
                <div className="cardChangeStatus">
                  <button className="btnvazio" onClick={btnChangeClickAdmin} value="vazio" id={element.idestabelecimento}> Vazio</button>
                  <button className="btnmoderado" onClick={btnChangeClickAdmin} value="moderado" id={element.idestabelecimento}> Moderado</button>
                  <button className="btncheio" onClick={btnChangeClickAdmin} value="cheio" id={element.idestabelecimento}> Cheio</button>
                  </div>
                </div>
            </div>
                <div className="cardStatus">
                  <div className={element.status==="vazio"? "statusGreen":"hideColor"}>
                    {element.status}
                  </div>
                  <div className={element.status==="cheio"? "statusRed":"hideColor"}>
                    {element.status}
                  </div>
                  <div className={element.status==="moderado"? "statusOrange":"hideColor"}>
                    {element.status}
                  </div>
                </div>
                 
      </div>;
  

        }
          
});
}else{
  x = <div className="cardSearch">
  <div className="cardNoFound">
  Restaurante nao encontrado
</div>
</div>;

}
 

    if (adminMod == "news") {
      if (newestabs && newestabs.length>0) {
        newestabs.forEach(function(element) {
          if (x) {
            n = [n,
              <div className="cardSearchh">
              <img 
                className="cardImage"
                src= {element.preimage}
                alt="new"
              />
              <div className="cardText">
                  <div className="cardName">
                    {element.prenome}
                  </div>
                  <div className="cardAdress">
                  <div className="cardAdressTitle">
                    Endereço:
                  </div>
                  <img 
                    className="logoAdress"
                    src= "https://w7.pngwing.com/pngs/583/119/png-transparent-computer-icons-map-desktop-wallpaper-map-address.png"
                    alt="new"
                  />
                    {element.prelocal}
                  </div>
                  <div className="cardAdress">
                   
                <div className="cardNewsSwitch">
                  <button className="btnnewsswitcha" onClick={btnChangeClickNews} value="aceitar" id={element.idpreestabelecimento}> Aceitar</button>
                  <button className="btnnewsswitchr" onClick={btnChangeClickNews} value="recusar" id={element.idpreestabelecimento}> Recusar</button>
                  </div>
                </div>
              </div>

               
    </div>];
          }else{

          n = <div >
                  <img 
                    className="cardImage"
                    src= {element.preimage}
                    alt="new"
                  />
                  <div className="cardText">
                      <div className="cardName">
                        {element.prenome}
                      </div>
                      <div className="cardAdress">
                      <div className="cardAdressTitle">
                        Endereço:
                      </div>
                      <img 
                        className="logoAdress"
                        src= "https://w7.pngwing.com/pngs/583/119/png-transparent-computer-icons-map-desktop-wallpaper-map-address.png"
                        alt="new"
                      />
                        {element.prelocal}
                      </div>
                  </div>

                   
        </div>;
    
  
          }
            
  });
  }else{
    x = <div className="cardSearch">
    <div className="cardNoFound">
    Restaurante nao encontrado
  </div>
  </div>;
  
  }
    }

}









  function changeAdminMod(event) {
    setAdminMod(event.target.name);
  };

 


  
  return (
    <div className="appBody">
        <div className="menuAdmin">
        <input type="button" value="Novos" className="btnMenuChanges" name="news" onClick={changeAdminMod}/>
        <input type="button" value="Alteracoes" className="btnMenuNew" name="changes" onClick={changeAdminMod}/>
        </div>
        <div className={adminMod==="changes"? "":"hide"}>{x}</div>
        <div className={adminMod==="news"? "":"hide"}>{n}</div>

      
    </div>
  );
}


export default Administrator;

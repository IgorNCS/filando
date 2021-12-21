import { render } from '@testing-library/react';
import React, { useEffect, useState, Component } from 'react'
// import React from 'react'
import './BodySearch.css';

function BodySearch(props) {

  let elemento = props.estabelecimentos;
  // console.log(elemento);
  let x;
  let y;

    if (elemento && elemento.length>0) {
      elemento.forEach(function(element) {
        // console.log(element.nome);
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
                <div className="cardAdressTitle">
                  Endereço:
                </div>
                <img 
                  className="logoAdress"
                  src= "https://w7.pngwing.com/pngs/583/119/png-transparent-computer-icons-map-desktop-wallpaper-map-address.png"
                  alt="new"
                />
                  {element.local}
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
                    <div className="cardAdressTitle">
                      Endereço:
                    </div>
                    <img 
                      className="logoAdress"
                      src= "https://w7.pngwing.com/pngs/583/119/png-transparent-computer-icons-map-desktop-wallpaper-map-address.png"
                      alt="new"
                    />
                      {element.local}
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
  return (
    <div className="bodySearch">  
       
         {x}
       
    </div>
);



}

export default BodySearch;




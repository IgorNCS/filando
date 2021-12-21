import React, { useState, Component, useEffect } from 'react'
// import React from 'react'
import './Body.css';
import BodyMain from './BodyMain';
import BodySearch from './BodySearch';
import Axios from 'axios';


// var t;

function Body(props) {
  const [text, setText] = useState("");
  const [estab, setEstab] = useState("");

  function handleChange(event) {
    let t = event.target.value;
    setText(t);

    Axios.post("http://localhost:3000/search",{
      name: t,
    }).then((response)=>{
      setEstab(response.data);
      
    });
  }
  
  return (
    <div className="appBody">
      <form className="bodyForm">
        <label>       
        <input type="text" name="name" className="barSearch"
        placeholder="Buscar..." onChange={handleChange}/>
        </label>
      </form>
      <div className={text===""? "appHome":"none"}>
          <BodyMain></BodyMain>
      </div>
      <div className={text!==""? "appHome":"none"}>
          <BodySearch estabelecimentos={estab}></BodySearch>
      </div>
        
      
    </div>
  );
}


export default Body;

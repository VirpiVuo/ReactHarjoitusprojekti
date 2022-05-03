import './App.css';
import React, {useState} from 'react';

const Laskuri = (props) => {

//komponentin tilan määritys
const [luku, setLuku] = useState(0)
//asetetaan komponentille luku niminen tila, jos halutaan
//muuttaa tilaa täytyy kutsua funktiota setLuku ja parametriksi
//uusi arvo mikä halutaan laittaa (React useStateHook)

  return (
    <>

    <h3>{luku}</h3>

    <button onClick={() => setLuku(luku + 1)}>+</button>
    <button onClick={() => setLuku(luku - 1)}>-</button>
    <button onClick={() => setLuku(0)}>Reset</button>

    <button onClick={props.huomio}>Paina tästä</button>

      
    </>
  );
}

export default Laskuri;
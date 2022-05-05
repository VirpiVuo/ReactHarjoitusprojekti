import './App.css';
import React, {useState} from 'react';

const Laskuri = (props) => {
  //jos tiedetään viitattavan propsin nimi, esim tässä tapauksessa huomio, voidaan viitata myös suoraan 
  //-> const Laskuri = ({huomio}), tällöin myöskään myöhemmin ei travitse käyttää props.huomio vaan pelkkä 
  //huomio riittää
  //propseja voi olla useita, ne vain erotetaan toisistaan pilkulla ja niihin voidaan viitata myöhemmin suoraan nimellä

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
    <button onClick={() => setLuku(0)}>Reset</button><br></br>

    <button onClick={props.huomio}>Paina tästä</button><br></br>

      
    </>
  );
}

export default Laskuri;
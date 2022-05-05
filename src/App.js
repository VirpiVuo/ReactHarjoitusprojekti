import './App.css';
import Laskuri from './Laskuri';
import Viesti from './Viesti';
import React, {useState} from 'react';
import Posts from './Posts';

const App = () => {

  //App komponentin tila
const [showLaskuri, setShowLaskuri] = useState(false) //jos käytetään useState hookia, käytetään hakasulkeita
//määritetään boolean-tyyppinen vakio showLaskuri jonka oletustila on false

const [showPosts, setShowPosts] = useState(false)

//määritetään huomio -niminen funktio ja mitä tapahtuu sitä käytettäessä (alert)
const huomio = () => {
  alert("Varoitus! Olet liian typerä käyttääksesi tätä ohjelmaa!")

}

  return (
    <div className="App">
      <h1>Hello from React!</h1>

      {!showPosts && <button onClick={() => setShowPosts(!showPosts)}>Näytä postaukset</button>}

      {showPosts && <button onClick={() => setShowPosts(!showPosts)}>Piilota postaukset</button>}

      {showPosts && <Posts />}

    {showLaskuri && <Laskuri huomio={huomio}/>} 
    {/* välitetään laskurille huomio propsi  */}

    {/* {showLaskuri === true ? <Laskuri huomio={huomio} /> : <button onClick={() => setShowLaskuri(!showLaskuri)}>Näytä laskuri</button>}  */}
    {/* toinen tapa tehdä ehdollinen renderöinti, vanhempi */}

    {showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Piilota laskuri</button>}
    {/* jos showLaskurin tila on päinvastainen kuin oletustila, näkyy tämä */}

    {!showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Näytä laskuri</button>}
    {/* jos showLaskurin tila on sama kuin oletustila, näkyy tämä */}
    
    <Viesti teksti="Tervehdys App-komponentista!"/>

    </div>
  );
}

export default App;

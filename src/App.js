import './App.css';
import Laskuri from './Laskuri';
import Viesti from './Viesti';
import React, {useState} from 'react';
import Posts from './Posts';
import CustomerList from './CustomerList';
import Message from './Message';

const App = () => {

  //App komponentin tila
const [showLaskuri, setShowLaskuri] = useState(false) //jos käytetään useState hookia, käytetään hakasulkeita
//määritetään boolean-tyyppinen vakio showLaskuri jonka oletustila on false

const [showPosts, setShowPosts] = useState(false)

//Statet Messagen näyttämistä varten:
const [showMessage, setShowMessage] = useState(false)
const [message, setMessage] = useState("")
const [isPositive, setIsPositive] = useState(false)

//määritetään huomio -niminen funktio ja mitä tapahtuu sitä käytettäessä (alert)
const huomio = () => {
  alert("Varoitus! Olet liian typerä käyttääksesi tätä ohjelmaa!")

}

  return (
    <div className="App">
      <h1>Hello from React!</h1>

      {/* Ehdollinen renderöinti siihen, milloin Message -komponenttia näytetään: */}
      {showMessage && <Message message={message} isPositive={isPositive} /> }
      {/* jos joku muu komponentti muuttaa Appissa määritettyjä stateja Messagen näyttämistä varten, määritetty viesti vastaanotetaan propsina messagessa */}
      
      {/* Välitetään CustomerList -komponentille Messageen liittyvät propsit, komponentti joka asettaa tiedot tarvitsee set- muuttujan */}
      <CustomerList setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}/>

      {!showPosts && <button onClick={() => setShowPosts(!showPosts)}>Postaukset</button>}

      {showPosts && <button onClick={() => setShowPosts(!showPosts)}>Piilota postaukset</button>}

    {showLaskuri && <Laskuri huomio={huomio}/>} 
    {/* välitetään laskurille huomio propsi  */}

    {/* {showLaskuri === true ? <Laskuri huomio={huomio} /> : <button onClick={() => setShowLaskuri(!showLaskuri)}>Näytä laskuri</button>}  */}
    {/* toinen tapa tehdä ehdollinen renderöinti, vanhempi */}

    {showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Piilota laskuri</button>}
    {/* jos showLaskurin tila on päinvastainen kuin oletustila, näkyy tämä */}

    {!showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Laskuri</button>}
    {/* jos showLaskurin tila on sama kuin oletustila, näkyy tämä */}
    
    <Viesti teksti="Tervehdys App-komponentista!"/>

    {showPosts && <Posts />}

    </div>
  );
}

export default App;

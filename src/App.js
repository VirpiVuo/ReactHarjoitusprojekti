import './App.css';
import Laskuri from './Laskuri';
// import Viesti from './Viesti';
import React, {useState} from 'react';
import Posts from './Posts';
import CustomerList from './CustomerList';
import Message from './Message';

import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
      <Router>

      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Link to={'/Customers'} className="nav-link">Customers</Link>
          <Link to={'/Laskuri'} className="nav-link">Laskuri</Link>
          <Link to={'/Posts'} className="nav-link">Typicode Posts</Link>
        </Nav>
      </Navbar>

      <h2>Northwind Traders</h2><br></br>

      {showMessage && <Message message={message} isPositive={isPositive} />}

      <Switch>
        <Route path="/Customers"> <CustomerList setMessage={setMessage} setIsPositive={setIsPositive}
        setShowMessage={setShowMessage} /></Route>

        <Route path="/Laskuri"> <Laskuri huomio={huomio} /></Route>
        <Route path="/Posts"> <Posts /></Route>
      </Switch>

      </Router>

      {/* <h1>Hello from React!</h1> */}

      {/* Ehdollinen renderöinti siihen, milloin Message -komponenttia näytetään: */}
      {/* {showMessage && <Message message={message} isPositive={isPositive} /> } */}
      {/* jos joku muu komponentti muuttaa Appissa määritettyjä stateja Messagen näyttämistä varten, määritetty viesti vastaanotetaan propsina messagessa */}
      
      {/* Välitetään CustomerList -komponentille Messageen liittyvät propsit, komponentti joka asettaa tiedot tarvitsee set- muuttujan */}
      {/* <CustomerList setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}/> */}

      {/* {!showPosts && <button onClick={() => setShowPosts(!showPosts)}>Postaukset</button>} */}

      {/* {showPosts && <button onClick={() => setShowPosts(!showPosts)}>Piilota postaukset</button>} */}

    {/* {showLaskuri && <Laskuri huomio={huomio}/>}  */}
    {/* välitetään laskurille huomio propsi  */}

    {/* {showLaskuri === true ? <Laskuri huomio={huomio} /> : <button onClick={() => setShowLaskuri(!showLaskuri)}>Näytä laskuri</button>}  */}
    {/* toinen tapa tehdä ehdollinen renderöinti, vanhempi */}

    {/* {showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Piilota laskuri</button>} */}
    {/* jos showLaskurin tila on päinvastainen kuin oletustila, näkyy tämä */}

    {/* {!showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Laskuri</button>} */}
    {/* jos showLaskurin tila on sama kuin oletustila, näkyy tämä */}
    
    {/* <Viesti teksti="Tervehdys App-komponentista!"/> -> jätetty pois lopullisesta versiosta */}

    {/* {showPosts && <Posts />} */}

    </div>
  )
}
export default App;

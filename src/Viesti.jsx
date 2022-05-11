import './App.css';
import React from 'react';

const Viesti = (props) => (

    //jos komponentin ainoa tehtävä on palauttaa jotain ruudulle, ei tarvita aaltosulkeita eikä returnia

    <>

    <p>{props.teksti}</p>
    
    </>
  );

export default Viesti;

//actionit virtaavat alaspäin komponentilta toiselle ja propsit ylöspäin

// App -komponentti käyttää Viesti -komponenttia ja antaa sille propsin eli tiedon mikä teksti näytetään
//paragraphissa props.teksti (kts. App -komponentti ja Viesti)
// App- komponentti sovelluksen juuri ja propsit kulkevat sieltä kohti "latvuksia/oksia"'

// Actionit eli tapahtumat (esim. CustomerAdd) tulevat alaspäin
// App -komponentissa käytetään CustomerAddia ja Appista välitetään "ylös" CustomerAddille propsit 
// ""const CustomerAdd = ({setAddnew, setIsPositive, setMessage, setShowMessage})""
//kun propseja käytetään CustomerAddissa, ne menevät alaspäin takaisin App -komponentille
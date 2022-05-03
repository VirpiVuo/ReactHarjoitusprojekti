import './App.css';
import React from 'react';

const Viesti = (props) => (

    //jos komponentin ainoa tehtävä on palauttaa jotain ruudulle, ei tarvita aaltosulkeita eikä returnia

    <>

    <p>{props.teksti}</p>
    
    </>
  );

export default Viesti;
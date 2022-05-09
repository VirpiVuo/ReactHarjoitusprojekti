import './App.css';
import React, {useState, useEffect} from 'react';
import CustomerService from './services/Customer'
import Customer from './Customer';
import CustomerAdd from './CustomerAdd';

//useEffect- hook tulee ajetuksi aina kerran silloin kun komponentti latautuu


const CustomerList = ({setIsPositive, setMessage, setShowMessage}) => {
  //otetaan propsit vastaan App.js -komponentista HUOM! aaltosulkeiden sisälle
 
//komponentin tilan määritys
const [customers, setCustomers] = useState([])
const [showCustomers, setShowCustomers] = useState(false)
const [addNew, setAddnew] = useState(false)
//uuden lisäys oletuksena false eli oletuksena listausnäkymä missä ei uuden lisäystä näkyvissä
//kun painetaan nappia muutetaan setAddnew päinvastaiseksi eli trueksi ja näytetään lisäys

useEffect(() => {
    CustomerService.getAll()
    .then(data => {
        setCustomers(data)
    })
},[addNew] //kun lisäystila muuttuu, haetaan backendistä päivittynyt listaus
)
  return (
    <>

    <h2><nobr style={{ cursor: 'pointer'}}
    onClick={() => setShowCustomers(!showCustomers)}>Customers</nobr>

    {!addNew && <button className='nappi' onClick={() => setAddnew(true)}>Add new</button>}</h2>

    {/* tehdään ehdollinen renderöinti eli tarvitaan aaltosulkeet (jos setAddnew on true, näytetään tämä) */}
    {addNew && <CustomerAdd setAddnew={setAddnew} setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}/>}
     
     {
      //  loopissa loopataan customerit läpi ja jokaisesta tulee vuorollaan c
         showCustomers && customers && customers.map(c => (
             <Customer key={c.customerId} customer = {c} />
             /* renderöidään luotu Customer-komponentti, viitataan komponentissa nimettyyn propsiin customer ja sen arvo on c */
         )
         )
     }

    </>
  )
}
export default CustomerList;
import './App.css';
import React, {useState, useEffect} from 'react';
import CustomerService from './services/Customer'
import Customer from './Customer';
import CustomerAdd from './CustomerAdd';
import CustomerEdit from './CustomerEdit';

//useEffect- hook tulee ajetuksi aina kerran silloin kun komponentti latautuu


const CustomerList = ({setIsPositive, setMessage, setShowMessage}) => {
  //otetaan propsit vastaan App.js -komponentista HUOM! aaltosulkeiden sisälle
 
//komponentin tilan määritys
const [customers, setCustomers] = useState([])
const [showCustomers, setShowCustomers] = useState(false)
const [addNew, setAddnew] = useState(false)
//uuden lisäys oletuksena false eli oletuksena listausnäkymä missä ei uuden lisäystä näkyvissä
//kun painetaan nappia muutetaan setAddnew päinvastaiseksi eli trueksi ja näytetään lisäys
const [reload, reloadNow] = useState(false)
//apustate crud-toimintoja varten jotta saadaan sivu ladattua uudestaan
const [editCustomer, setEditCustomer] =useState(false)
//lisätään asiakkaan muokkausta varten sille oma state, määrittää näytetäänkö luotua muokkauskomponenttia vai ei 
//oletusarvona false = ei näytetä, kun boolean arvo muuttuu trueksi niin näytetään
const [theCustomer, setTheCustomer] =useState(false) //tallennuspaikka Customer- oliolle jota halutaan lähteä muokkaamaan
const [search, setSearch] = useState("") //state joka pitää sisällään dynaamisen hakukentän senhetkisen tilanteen

useEffect(() => {
    CustomerService.getAll()
    .then(data => {
        setCustomers(data)
        // window.scrollBy(0, -50000)
    })
},[addNew, reload, editCustomer] //kun lisäystila, lataustila tai muokkaustila muuttuu, haetaan backendistä päivittynyt listaus
)

//hakukentän onChange -tapahtumankäsittelijä
const handleSearchInputChange = (event) => {
  setShowCustomers(true)
  setSearch(event.target.value.toLowerCase())
}

const editTheCustomer = (customer) => {
  setTheCustomer(customer) 
  setEditCustomer(true)
  // setShowCustomers(false)
}

  return (
    <>

    <h2><nobr style={{ cursor: 'pointer'}}
    onClick={() => setShowCustomers(!showCustomers)}>Customers</nobr>

    {!editCustomer && !addNew && 
    <input id="search" placeholder="Search by Company Name " value={search} onChange={handleSearchInputChange} />
    }
    {/* jos editCustomer ja addNew -statet ovat false, näytetään hakukenttä */}

    {!addNew && <button className='nappi' onClick={() => setAddnew(true)}>Add new</button>}</h2>

    {/* tehdään ehdollinen renderöinti eli tarvitaan aaltosulkeet (jos setAddnew on true, näytetään tämä) */}
    {addNew && <CustomerAdd setAddnew={setAddnew} setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}/>}

    {/* tehdään ehdollinen renderöinti eli tarvitaan aaltosulkeet (jos editCustomer on true, näytetään tämä) */}
    {editCustomer && <CustomerEdit setEditCustomer={setEditCustomer} setIsPositive={setIsPositive} setMessage={setMessage} 
    setShowMessage={setShowMessage} theCustomer={theCustomer} />}

     {
      //  loopissa loopataan customerit läpi ja jokaisesta tulee vuorollaan c
         !addNew && !editCustomer && showCustomers && customers && customers.map(c => 
          {
          const lowerCaseName = c.companyName.toLowerCase()
          if (lowerCaseName.indexOf(search) > -1) {
            return(
            <Customer key={c.customerId} customer = {c} setIsPositive={setIsPositive} setMessage={setMessage}
              setShowMessage={setShowMessage} reload={reload} reloadNow={reloadNow} editTheCustomer={editTheCustomer} 
              />
             /* renderöidään luotu Customer-komponentti, viitataan komponentissa nimettyyn propsiin customer ja sen arvo on c */
            //  välitetään myös messgaeen liittyvät propsit Customer -komponentille samaan tapaan kuin on välitetty CustomerAddille
         )
          }
        }
         )
     }

    </>
  )
}
export default CustomerList;

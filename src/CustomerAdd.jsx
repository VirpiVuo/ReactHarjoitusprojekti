import './App.css';
import React, {useState} from 'react';
import CustomerService from './services/Customer'
import CustomerList from './CustomerList';

const CustomerAdd = ({setAddnew}) => {

//komponentin tilan määritys, määritetään jokaista input -kenttää vastaavat statet ja alustetaan tyhjäksi merkkijonoksi
const [newCustomerId, setNewCustomerId] = useState("")
const [newCompanyName, setNewCompanyName] = useState("")
const [newContactName, setNewContactName] = useState("")
const [newContactTitle, setNewContactTitle] = useState("")
const [newAddress, setNewAddress] = useState("")

const [newCity, setNewCity] = useState("")
const [newRegion, setNewRegion] = useState("")
const [newPostalCode, setNewPostalCode] = useState("")

const [newCountry, setNewCountry] = useState("")
const [newPhone, setNewPhone] = useState("")
const [newFax, setNewFax] = useState("")


//Reactissa funktiot ovat nuolifunktioita, onSubmit tapahtumankäsittelijäfunktio
const handleSubmit = (event) => {
    event.preventDefault() //estetään oletusarvoa tapahtumasta
    var newCustomer = { //luodaan uusi olio johon sijoitetaan statessa olevat, käyttäjän syöttämät tiedot
        customerId: newCustomerId.toUpperCase(),
        companyName: newCompanyName,
        contactName: newContactName,
        contactTitle: newContactTitle,
        address: newAddress,
        city: newCity,
        region: newRegion,
        postalCode: newPostalCode,
        country: newCountry,
        phone: newPhone,
        fax: newFax
    }
    // alert(newCustomer.companyName) tarkistus kulkeutuuko tieto oikein 
    CustomerService.create(newCustomer) //luodaan annetuilla tiedoilla uusi asiakkuus
    .then(response => {
        if  (response.status == 200) {
            alert("Added new Customer: " + newCustomer.companyName)
            setAddnew(false) //jos kaikki ok, näytetään alert sekä vaihdetaan setAddnew -status takaisin oletukseen eli falseksi
        }
    })

    .catch(error => { //vastine .then -komennolle, jos tapahtuu error
        alert("Error")
    })
}

  return (
    <div id="addNew">
        <h2>Add new customer</h2>
        {/* {addNew && <button onClick={() => setAddnew(!addNew)}>Sulje lisäysikkuna</button>} */}

        <form onSubmit={handleSubmit}>
            <div>
            <input type="text" value={newCustomerId} onChange={({target}) => setNewCustomerId(target.value)} required
            maxLenght="5" minLenght="5" placeholder='ID with 5 capital letters' />
            </div>
            <div>
            <input type="text" value={newCompanyName} onChange={({target}) => setNewCompanyName(target.value)} 
            placeholder='Company Name' required/>
            </div>
            <div>
            <input type="text" value={newContactName} onChange={({target}) => setNewContactName(target.value)} 
            placeholder='Contact Name' />
            </div>
            <div>
            <input type="text" value={newContactTitle} onChange={({target}) => setNewContactTitle(target.value)}
            placeholder='Contact Title' />
            </div>
            <div>
            <input type="text" value={newAddress} onChange={({target}) => setNewAddress(target.value)}
             placeholder='Address' />
            </div>
            <div>
            <input type="text" value={newCity} onChange={({target}) => setNewCity(target.value)} 
            placeholder='City' />
            </div>
            <div>
            <input type="text" value={newRegion} onChange={({target}) => setNewRegion(target.value)} 
            placeholder='Region' />
            </div>
            <div>
            <input type="text" value={newPostalCode} onChange={({target}) => setNewPostalCode(target.value)} 
            placeholder='Postal Code' />
            </div>
            <div>
            <input type="text" value={newCountry} onChange={({target}) => setNewCountry(target.value)} 
            placeholder='Country' />
            </div>
            <div>
            <input type="text" value={newPhone} onChange={({target}) => setNewPhone(target.value)} 
            placeholder='Phone' />
            </div>
            <div>
            <input type="text" value={newFax} onChange={({target}) => setNewFax(target.value)} 
            placeholder='Fax' />
            </div>
            {/* <br></br> */}
            <input type="submit" value="Save" /> 
            <input type="button" value="Back" onClick={() => setAddnew(false)}/>          
        </form>

    </div>
  )
}
export default CustomerAdd;
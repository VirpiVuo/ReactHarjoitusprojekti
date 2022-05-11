import './App.css';
import React, {useState} from 'react';
import CustomerService from './services/Customer'

const CustomerEdit = ({setEditCustomer, setIsPositive, setMessage, setShowMessage, theCustomer}) => {
    //otetaan propsit vastaan CustomerList.jsx -komponentista
    //kun renderöidään edit- tila, otetaan propsina vastaan senhetkisen asiakkaan tiedot theCustomer -oliossa ja
    //käytetään niitä pohjatietoina

//komponentin tilan määritys, määritetään jokaista input -kenttää vastaavat oletusstatet joissa jo olion jo olemassaolevat arvot
const [newCustomerId, setNewCustomerId] = useState(theCustomer.customerId)
const [newCompanyName, setNewCompanyName] = useState(theCustomer.companyName)
const [newContactName, setNewContactName] = useState(theCustomer.contactName)
const [newContactTitle, setNewContactTitle] = useState(theCustomer.contactTitle)
const [newAddress, setNewAddress] = useState(theCustomer.address)

const [newCity, setNewCity] = useState(theCustomer.city)
const [newRegion, setNewRegion] = useState(theCustomer.region)
const [newPostalCode, setNewPostalCode] = useState(theCustomer.postalCode)

const [newCountry, setNewCountry] = useState(theCustomer.country)
const [newPhone, setNewPhone] = useState(theCustomer.phone)
const [newFax, setNewFax] = useState(theCustomer.fax)


//Reactissa funktiot ovat nuolifunktioita, onSubmit tapahtumankäsittelijän funktio
const handleSubmit = (event) => {
    event.preventDefault() //estetään oletusarvoa tapahtumasta
    var editedCustomer = { //luodaan uusi olio johon sijoitetaan statessa olevat, käyttäjän syöttämät tiedot
        customerId: newCustomerId,
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
    // alert(editedCustomer.companyName) tarkistus kulkeutuuko tieto oikein 
    CustomerService.update(editedCustomer) //muokataan asiakkaan tietoja annetuilla uusilla tiedoilla
    .then(response => {
        if (response.status === 200) {
            setMessage("Edited Customer " + editedCustomer.companyName + " succesfully!")
            setShowMessage(true)
            setIsPositive(true) //eli luokaksi tulee määritelty "pos" ja näytetään App.css sille määritellyssä muodossa

            //lisätään timeout, muutaman sekunnin päästä näytettävä viesti piilotetaan 3000 millisekunnin eli 3 sekunninn kuluttua
            setTimeout(() => {
                setShowMessage(false)
            }, 3000)

            setEditCustomer(false) //jos kaikki ok, näytetään message sekä vaihdetaan setEditCustomer -status takaisin oletukseen eli falseksi
            //jolloin ei renderöidä CustomerEdit- komponenttia 
        }
    })

    .catch(error => { //vastine .then -komennolle, jos tapahtuu error
        setMessage(error)
        setIsPositive(false)
        setShowMessage(true)

        setTimeout(() => {
            setShowMessage(false)
        }, 3000)
    })
}

  return (
    <div id="addNew"> 
    {/* käytetään samaa tyyliluokkaa kuin uuden asiakkaan lisäämisessä */}
        <h2>Edit Customer</h2>
        {/* {addNew && <button onClick={() => setAddnew(!addNew)}>Sulje lisäysikkuna</button>} */}

        <form onSubmit={handleSubmit}>
            <div>
            <input type="text" value={newCustomerId} disabled />
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
            <input type="button" value="Back" onClick={() => setEditCustomer(false)}/>          
        </form>

    </div>
  )
}
export default CustomerEdit;
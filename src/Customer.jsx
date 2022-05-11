import './App.css';
import React, {useState} from 'react';
import CustomerService from './services/Customer'

//komponentti jonka tehtävä renderöidä yhden yksittäisen asiakkaan tiedot kerrallaan

const Customer = ({customer, editTheCustomer, setIsPositive, setMessage, setShowMessage, reload, reloadNow}) => {
    //otetaan vastaan propsina yhden yksittäisen customer-olion tiedot sekä message -propsit
 
//komponentin tilan määritys
const [showDetails, setShowDetails] = useState(false)

//poisto -funktio
const deleteCustomer = (customer) => {

    let vastaus = window.confirm(`Remove Customer ${customer.companyName}`)

    if  (vastaus === true) {
    CustomerService.remove(customer.customerId)
    .then(res => {
        if (res.status === 200) {
           setMessage(`Customer ${customer.companyName} removed succesfully!`) 
           setIsPositive(true)
           setShowMessage(true)
           window.scrollBy(0, -10000) //ikunnnan ylösscrollaus jotta nähdään varmistusalert

           setTimeout(() => {
            setShowMessage(false)
        }, 3000)
        reloadNow(!reload) //asiakaslistan päivitys reload, realoadNow -staten avulla (boolean, true/false)
        }
    })

    .catch(error => { //vastine .then -komennolle, jos tapahtuu error
        setMessage(error)
        setIsPositive(false)
        setShowMessage(true)
        window.scrollBy(0, -10000)

        setTimeout(() => {
            setShowMessage(false)
        }, 3000)
    })
}
else {
    setMessage(`Remove cancelled!`) 
           setIsPositive(true)
           setShowMessage(true)
           window.scrollBy(0, -10000)

           setTimeout(() => {
            setShowMessage(false)
        }, 3000)
    }
}

  return (
      //palautetaan jokaiselle asiakkaalle div
    <div className='customerDiv'>
    <h4 onMouseEnter={() => setShowDetails(true)} //kun hiiri viedään otsikon päälle, setShowDetails on true eli näytetään asiakkaan tiedot
    onMouseLeave={() => setShowDetails(false)} //kun hiiri viedään pois otsikon päältä, setShowDetails on false eli ei näytetä asiakkaan tietoja
    >{customer.companyName}<br></br><br></br>
    <button className='editNappi' onClick={() => editTheCustomer(customer)}>Edit</button><br></br>
    <button className='poistoNappi' onClick={() => deleteCustomer(customer)}>Delete</button>
    </h4>

    {/* esimerkki miten tehtäisin jos haluttaisiin painettava nappi asiakkaan lisätietojen avaamista varten */}
    {/* <h4 onClick={() => setShowDetails(!showDetails)}></h4> vaihdetaan tapahtumankäsittelija onClickiksi ja 
    määritetään että arvo vaihtuu aina klikattaessa käänteiseksi olleelle arvolle
    kommentissa myös poistonappi lisättynä asiakkaan lisätietoikkunaan */}



    {/* seuraava tietotaulukko näytetään otsiokn alla vain jos showDetails state on true */}
    {showDetails && <div className='customerDetails'>
        <table>
            <thead>
                <tr>
                    <th>Contact Person</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{customer.contactName}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.address}</td>
                    <td>{customer.city}</td>
                    <td>{customer.country}</td>
                </tr>
            </tbody>
        </table>
        {/* <button className='poistoNappi' onClick={() => deleteCustomer(customer)}>Delete</button> */}
    </div>
    }
    </div>
  )
}

export default Customer;
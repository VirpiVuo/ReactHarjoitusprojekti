import './App.css';
import React, {useState} from 'react';

const Customer = ({customer}) => {
    //otetaan vastaan propsina yhden yksittäisen customer-olion tiedot
 
//komponentin tilan määritys
const [showDetails, setShowDetails] = useState(false)

  return (
      //palautetaan jokaiselle asiakkaalle div
    <div className='customerDiv'>
    <h4 onMouseEnter={() => setShowDetails(true)} //kun hiiri viedään otsikon päälle, setShowDetails on true eli näytetään asiakkaan tiedot
    onMouseLeave={() => setShowDetails(false)} //kun hiiri viedään pois otsikon päältä, setShowDetails on false eli ei näytetä asiakkaan tietoja
    >{customer.companyName}</h4>

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
    </div>
    }
    </div>
  )
}
export default Customer;
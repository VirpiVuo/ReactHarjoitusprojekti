import './App.css';
import React, {useState, useEffect} from 'react';
import CustomerService from './services/Customer'
import Customer from './Customer';

//useEffect- hook tulee ajetuksi aina kerran silloin kun komponentti latautuu


const CustomerList = () => {
 
//komponentin tilan määritys
const [customers, setCustomers] = useState([])
const [showCustomers, setShowCustomers] = useState(false)

useEffect(() => {
    CustomerService.getAll()
    .then(data => {
        setCustomers(data)
    })
},[]
)
  return (
    <>

    <h2 onClick={() => setShowCustomers(!showCustomers)}>Customers</h2>
     
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
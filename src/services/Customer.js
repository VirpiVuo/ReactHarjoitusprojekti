import axios from "axios";

const baseUrl = "https://localhost:44350/nw/Customers"

//GET- metodi
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

//POST -metodi (create)
const create = newCustomer => {

    return axios.post(baseUrl, newCustomer)
}

//DELETE -metodi, parametriksi tarvitaan id
const remove = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

//PUT -metodi (edit)
const update = (object) => {
    return axios.put(`${baseUrl}/${object.customerId}`, object)
}

export default { getAll, create, remove, update }
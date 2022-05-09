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

export default { getAll, create }
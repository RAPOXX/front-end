import axios from "axios"

const logar = (matricula,password) => {
    axios.defaults.baseURL = 'http://localhost:8080'
    axios.post('/logar',{
        matricula : matricula,
        password : password
    })
    .then((response) => {
        console.log(response.data)
    })
    .catch((err) => {
        console.log(err)
    })
}

export default logar
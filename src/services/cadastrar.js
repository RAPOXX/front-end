import axios from "axios"

const cadastrar = (matricula,email,nome,password) => {
    axios.defaults.baseURL = 'http://localhost:8080'
    axios.post('/cadastrar',{
        matricula : matricula,
        email : email,
        nome : nome,
        password : password
    })
    .then((response) => {
        return console.log(response.data)
    })
    .catch((err) => {
        console.log(err)
    })
}

export default cadastrar
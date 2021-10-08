import axios from 'axios';
const apiUrl = 'http://localhost:7777/api/v1'

const authService = {

    async authenticate(data) {
        const endpoint = `${apiUrl}/auth`
        return axios.post(endpoint, data);
    },

    setLoggedUser(data, user){
        let parsedData = JSON.stringify(data.data.token)
        localStorage.setItem("token", parsedData)
        localStorage.setItem("user", user)
    },

    getLoggedUser(){
        let data = localStorage.getItem("token");
        let user = localStorage.getItem("user");
        if(!data) return null;
        try {
            let parsedData = JSON.parse(data)
            return { token: parsedData, user }
        } catch (error) {
            console.log(error)
            return null
        }
    },

    clearLoggerUser() {
        localStorage.clear()
    }
}

export default authService;
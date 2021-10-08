import axios from 'axios';
const apiUrl = 'http://localhost:7777/api/v1'

const userService = {

    async createUser(data) {
        const endpoint = `${apiUrl}/users`
        return axios.post(endpoint, data);
    },

}

export default userService;
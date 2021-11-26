import axios from 'axios';
import authService from './auth.service';
const apiUrl = 'http://localhost:7777/api/v1'

const establishmentsService = {

    async createEstablishments(data) {
        const endpoint = `${apiUrl}/establishments`
        
        const storage = await authService.getLoggedUser()

        return axios.post(endpoint, data, { 
            headers : { authorization : storage.token }
        });
    },

    async getEstablishments() {
        const endpoint = `${apiUrl}/establishments`

        const storage = await authService.getLoggedUser()

        return axios.get(endpoint, { 
            headers : { authorization : storage.token }
        });
    },

    async getEstablishmentsById(establishments_id) {
        const endpoint = `${apiUrl}/establishments/${establishments_id}`

        const storage = await authService.getLoggedUser()

        return axios.get(endpoint, { 
            headers : { authorization : storage.token }
        });
    },

    async updateEstablishments(establishments_id, data) {
        const endpoint = `${apiUrl}/establishments/${establishments_id}`

        const storage = await authService.getLoggedUser()

        return axios.put(endpoint, data, { 
            headers : { authorization : storage.token }
        });
    },

    async deleteEstablishment(establishments_id) {
        const endpoint = `${apiUrl}/establishments/${establishments_id}`

        const storage = await authService.getLoggedUser()

        return axios.delete(endpoint, { 
            headers : { authorization : storage.token }
        });
    }

}

export default establishmentsService;
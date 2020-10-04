import axios from 'axios';

const URL = "http://localhost:8080";
const API_clients = "/clients";
const API_client = "/client";
const API_userLogin = "/login";

class ClientService {

    login(loginInfo) {
        const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          };

        console.log(loginInfo);
        return axios.post(URL + API_userLogin, loginInfo, config);
    }

    getClients() {
        return axios.get(URL + API_clients);
    }

    createClient(client) {
        const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          };
        console.log(URL+API_client);
        console.log("client here: " + client);
        return axios.post(URL + API_client, client, config);
    }

    getClientById(id) {
        console.log("Third call with id: " + id);
        return axios.get(URL + API_client + '/' + id);
    }

    updateClient(id, client){
        return axios.put(URL + API_client + '/' + id, client);
    }

    deleteClient(id) {
        return axios.delete(URL + API_client + '/' + id);
    }
}

export default new ClientService()
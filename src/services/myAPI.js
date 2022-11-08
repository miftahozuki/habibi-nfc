import axios from 'axios';

const myAPI = axios.create({
    baseURL: 'https://api.habibigarden.com/',
});

export default myAPI;
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://6624fee904457d4aaf9d868a.mockapi.io/',
});

export default instance;
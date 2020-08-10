import axios from'axios';

//add the API Request base URL to make the requests to he movie DB
//create and instance to create and acceess the api
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

//instance.get('/foo-bar');

export default instance;
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-shopping-cart-app.firebaseio.com/'
});

export default instance;
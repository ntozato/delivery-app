import axios from 'axios';

const url = 'http://localhost:3001/';

const login = (user) => axios.post(`${url}login`, user);

const getDataUser = (email) => axios.get(`${url}custumer?email=${email}`);

const getAllProduts = () => axios.get(`${url}products`);

const register = (newUser) => axios.post(`${url}register`, newUser);

export default { login, register, getDataUser, getAllProduts };

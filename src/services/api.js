import axios from 'axios';

const BASE_URL = "https://api.escuelajs.co/api/v1";

const getAllProducts = async () => {
    const response = await axios.get(`${BASE_URL}/products`)
    return response.data
}

const getSomeProducts = async offset => {
    const response = await axios.get(`${BASE_URL}/products?offset=${offset}&limit=20`);
    return response.data
}

const getProduct= async id => {
    const response = await axios.get(`${BASE_URL}/products/${id}`)
    return response.data
}

export {getAllProducts, getSomeProducts, getProduct};
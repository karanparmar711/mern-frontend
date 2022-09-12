import axios from "axios";

const URL = "http://localhost:5000/api/products";

export const addProduct = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("Error while calling addUser api", error.message);
  }
};

export const getProducts = async () => {
  try {
    return await axios.get(`${URL}/getall`);
  } catch (error) {
    console.log("Error while calling getUsers api", error.message);
  }
};

export const getProduct = async (data) => {
  try {
    return await axios.get(`${URL}/getById/${data}`);
  } catch (error) {
    console.log("Error while calling getUser api", error.message);
  }
};

export const editProduct = async (data, id) => {
  try {
    return await axios.put(`${URL}/update/${id}`, data);
  } catch (error) {
    console.log("Error while calling editUser api", error.message);
  }
};

export const deleteProduct = async (id) => {
  try {
    return await axios.delete(`${URL}/delete/${id}`);
  } catch (error) {
    console.log("Error while calling deleteUser api", error.message);
  }
};

// export {
//     addProduct,
//     getProducts,
//     getProduct,
//     editProduct,
//     deleteProduct,

// }

import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../services/api";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 3% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;
const defaultValue = {
  productName: "",
  category: "",
  price: "",
};

// console.log("i am karan parmar")

const AddProducts = () => {
  const [product, SetProduct] = useState(defaultValue);
  const navigate = useNavigate();

  const onValueChange = (e) => {
    // console.log(e.target.name,e.target.value);
    SetProduct({ ...product, [e.target.name]: e.target.value });
    // console.log(product)
  };

  const AddProductDetails = async () => {
    if (product.productName && product.category && product.price) {
      await addProduct(product);
      navigate("/product/show");
      // toast.success("Product added Successfully",{
      //   position:"bottom-right"
      //  })
    } else {
      toast.error("All Fields Are Required!", {
        position: "bottom-right",
      });
    }
  };
  return (
    <>
      <Container>
        <Typography variant="h4">Add Product</Typography>
        <FormControl>
          <InputLabel>ProductName</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="productName" />
        </FormControl>
        <FormControl>
          <InputLabel>Category</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="category" />
        </FormControl>
        <FormControl>
          <InputLabel>Price</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="price" />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={() => AddProductDetails()}>
            Add Product
          </Button>
        </FormControl>
      </Container>
      <ToastContainer />
    </>
  );
};

export default AddProducts;

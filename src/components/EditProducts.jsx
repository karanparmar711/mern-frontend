import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct, editProduct } from "../services/api";

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

const EditProducts = () => {
  const [product, SetProduct] = useState(defaultValue);
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    let response = await getProduct(id);
    console.log(response.data.data);
    SetProduct(response.data.data);
  };

  const onValueChange = (e) => {
    SetProduct({ ...product, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
    // console.log(product)
  };

  const AddProductDetails = async () => {
    await editProduct(product, id);
    navigate("/product/show");
    // toast.success("Product edited Successfully",{
    //   position:"bottom-right"
    //  })
  };

  return (
    <>
      <Container>
        <Typography variant="h4">Edit Product</Typography>
        <FormControl>
          <InputLabel>ProductName</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="productName"
            value={product.productName}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Category</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="category"
            value={product.category}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Price</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="price"
            value={product.price}
          />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={() => AddProductDetails()}>
            Edit Product
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

export default EditProducts;

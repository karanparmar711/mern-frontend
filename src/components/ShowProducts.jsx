import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  styled,
  Button,
} from "@mui/material";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "../services/api";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;

const Thead = styled(TableRow)`
  background: #000;
  & > th {
    color: #fff;
    font-size: 20px;
  }
`;

const Tbody = styled(TableRow)`
  & > td {
    font-size: 20px;
  }
`;

const ShowProducts = () => {
  const [products, SetProducts] = useState([]);

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    let response = await getProducts();
    //  console.log(response);
    SetProducts(response.data.data);
  };

  const deleteProductData = async (id) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            deleteProduct(id);
            getProductDetails();
            toast.error("Product deleted successfully", {
              position: "bottom-right",
            });
          },
        },
        {
          label: "No",
          onClick: () => getProductDetails(),
        },
      ],
    });
  };

  return (
    <>
      {/* Table = StyledTable, TableHead, TableRow = Thead, TableCell ==> it is use for table heading*/}
      <StyledTable>
        <TableHead>
          <Thead>
            <TableCell>Id</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Price</TableCell>
            <TableCell></TableCell>
          </Thead>
        </TableHead>
        {/* TableBody, TableRow = Tbody, TableCell ==> it is use for table body*/}
        <TableBody>
          {products.map((item) => (
            <Tbody>
              <TableCell>{item._id}</TableCell>
              <TableCell>{item.productName}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="warning"
                  style={{ marginRight: 10 }}
                  component={Link}
                  to={`/product/edit/${item._id}`}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => deleteProductData(item._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </Tbody>
          ))}
        </TableBody>
      </StyledTable>
      <ToastContainer />
    </>
  );
};

export default ShowProducts;

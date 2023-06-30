import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from '../redux/actions/productsActions';
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      dispatch(setProducts(response.data));
    } catch (err) {
      console.log("Error:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products:", products);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;

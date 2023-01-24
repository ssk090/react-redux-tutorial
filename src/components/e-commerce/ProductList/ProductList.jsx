import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../redux/slices/productSlice";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./ProductList.css";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const status = useSelector((state) => state.productReducer.status);
  const error = useSelector((state) => state.productReducer.error);
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (status == "loading") {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    return <Spin className="loading" indicator={antIcon} />;
  }
  if (status == "failed") {
    return (
      <>
        <div className="loading">
          <h3>Something went wrong..</h3>
          <p>{error}</p>
        </div>
      </>
    );
  }
  return (
    <div className="ProductList">
      {products.map((item) => (
        <div>
          <SingleProduct key={item.id} product={item} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;

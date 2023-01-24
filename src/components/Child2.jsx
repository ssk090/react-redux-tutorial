import React from "react";
import { useSelector } from "react-redux";

function Child2() {
  const message = useSelector((state) => state.messageReducer.message);
  return <>Data from Child 1 : {message} </>;
}

export default Child2;

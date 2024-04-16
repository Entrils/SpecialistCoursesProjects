import React, { useContext } from "react";
import "./css/BasketItem.css";

import ItemInfo from "./ItemInfo";
import ItemPrice from "./ItemPrice";
import Counter from "./Counter";

import { ThemeContext } from "../contexts/theme-context";

const BasketItem = ({
  uid,
  title,
  description,
  price,
  qty,
  setItems,
  items,
}) => {
  const myContext = useContext(ThemeContext);
  const { theme } = myContext;

  return (
    <div className={"BasketItem BasketItem-" + theme}>
      <ItemInfo title={title} description={description} />
      <ItemPrice value={price} currency={"₽"} />
      <Counter value={qty} uid={uid} items={items} setItems={setItems} />
      <ItemPrice value={qty * price} currency={"₽"} />
    </div>
  );
};

export default BasketItem;

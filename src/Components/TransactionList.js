import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((item) => {
          return (
            <li className="minus" key={item.id}>
              {item.text} <span>{item.amount}</span>
              <button className="delete-btn">x</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

import React, { useState, useEffect } from "react";

export const Context = React.createContext({});

// eslint-disable-next-line
export default (props) => {
  const [deliveryCost, setDeliveryCost] = useState(0);
  const [summ, setSumm] = useState(0);
  
  useEffect(() => {
    submitChanges();
  })
  
  const submitChanges = () => {
    const values = document.getElementsByClassName("input");
    const prices = document.getElementsByClassName("price");
    
    const valuesArray = Object.values(values);
    
    let summary = 0;
    valuesArray.forEach((value, index) => {
        summary += prices[index].textContent * value.value;
    });
    setSumm(summary)
    setDeliveryCost(summary > 100 ? 0 : 23.8)
  };

  return (
    <Context.Provider
      value={{
        deliveryCost: deliveryCost,
        summ: summ,
        submitChanges: submitChanges,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

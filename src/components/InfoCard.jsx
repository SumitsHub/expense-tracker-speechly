import React from "react";

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div style={{ textAlign: "center", padding: "0 10%" }}>
      Try saying: <br />
      Add {isIncome ? "income " : "expense "}
      for {isIncome ? "$100 " : "$50 "}
      in Category {isIncome ? "Salary " : "House "}
      for {isIncome ? "Monday " : "Saturday "}...
    </div>
  );
};

export default InfoCard;

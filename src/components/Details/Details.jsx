import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";
import useTransactions from "../../hooks/useTransactions";
import useStyles from "./styles";

Chart.register(ArcElement);
const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);
  // console.log({chartData});
  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card> 
  );
};

export default Details;

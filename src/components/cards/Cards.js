import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import style from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  const info = [
    {
      name: "Infected",
      style: style.infected,
      data: confirmed.value
    },
    {
      name: "Recovered",
      style: style.recovered,
      data: recovered.value
    },
    {
      name: "Deaths",
      style: style.deaths,
      data: deaths.value
    }
  ];
  return (
    <div className={style.container}>
      <Grid container spacing={3} justify="center">
        {info.map((cc, i) => (
          <Grid
            key={i}
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(style.card, cc.style)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {cc.name}
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={cc.data}
                  duration={2}
                  separator=","
                ></CountUp>
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                number of active cases of COVID-19
              </Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cards;

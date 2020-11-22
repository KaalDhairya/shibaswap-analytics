import { Box, Card, CardContent, Grid, Typography } from "@material-ui/core";

import { Percent } from ".";
import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  content: {
    alignItems: "center",
    display: "flex",
  },
  title: {
    fontWeight: 500,
  },
  cardContent: {
    "&:last-child": {
      paddingBottom: 16,
    },
  },
}));

function KPI(props) {
  const classes = useStyles();
  const {
    className,
    title = "",
    difference = "",
    value = "",
    valueUSD = "",
    ...rest
  } = props;
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
      variant="outlined"
    >
      <CardContent className={classes.cardContent}>
        <Grid container justify="space-between">
          <Grid item>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              gutterBottom
              noWrap
            >
              {title}
            </Typography>

            <Box display="flex" alignItems="center">
              <Typography variant="h5" color="textPrimary" noWrap>
                {!Number.isNaN(value) ? value : 0}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary" noWrap>
                {difference && !Number.isNaN(difference) ? (
                  <Percent marginLeft={1} percent={difference} />
                ) : null}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default KPI;

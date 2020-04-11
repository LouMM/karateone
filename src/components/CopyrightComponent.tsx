import { Typography, Link } from "@material-ui/core";
import React from "react";

export function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mtsikarate.org">
          Mount Si School of Karate
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
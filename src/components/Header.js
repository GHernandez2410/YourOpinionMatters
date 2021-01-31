import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import brand from "../static/images/brand.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:
      theme.palette.grey[200],
  },
  logo: {
    backgroundColor:
    theme.palette.grey[200],
    maxWidth: 160,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="inherit" style={{ boxShadow: 'none' }}>
        <Toolbar style={{ backgroundColor: '#eeeeee'}}>
            <img src={brand} alt="logo" className={classes.logo} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

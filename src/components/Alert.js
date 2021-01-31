import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function AlertMessage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="info" color='warning' className={classes.alert}>As this is for market research, please do not select our brand.</Alert>
    </div>
  );
}

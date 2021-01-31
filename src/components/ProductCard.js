import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor:
        theme.palette.grey[200],
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    backgroundColor:
        theme.palette.grey[200],
  },
}));

export default function ProductCard({ title, photo }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ boxShadow: 'none' }}>
        <CardMedia
        className={classes.cover}
        image={photo}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
            <Typography variant="body1" >{title}</Typography>
            <div style={{color: 'green'}}>
              <CheckCircleIcon/>
                This is a valid product
            </div>
        </CardContent>
      </div> 
    </Card>
  );
}

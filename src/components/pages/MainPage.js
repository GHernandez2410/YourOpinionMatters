
import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import { VALID_URL, VALID_ASIN } from '../../helpers/types.js';
import { validateProduct } from '../../services/user.service.js';

import AlertMessage from '../Alert.js';
import Error from '../Error.js';
import ProductCard from '../ProductCard.js';
import Header from '../Header.js';
import DialogModal from '../Dialog.js';

import product from "../../static/images/product.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    flexGrow: 1,
    width: '100vw',
    overflowX: 'hidden',
  },
  logo: {
    backgroundColor:
    theme.palette.grey[200],
    maxWidth: 160,
  },
  main: {
    backgroundColor:
      theme.palette.grey[200],
    height: '30vh',
    width: '100vw',
    paddingRight: theme.spacing(18),
    paddingLeft: theme.spacing(18),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  arrow: {
    backgroundColor:
      theme.palette.grey[200],
  },
  footer: {
    marginTop: theme.spacing(8),
    height: '50vh',
    width: '100vw',
    paddingRight: theme.spacing(14),
    paddingLeft: theme.spacing(14),
  },
}));

export default function BoardCO2Analytics() {
  const classes = useStyles();

  const [url, setUrl] = useState('')
  const [asin, setAsin] = useState('')
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAsin, setShowAsin] = useState(false);
  const [error, setError] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }; 

  const fakeCallURL = (url) => {
    setLoading(true)
    //validate the value first
    if(url && url === VALID_URL) {
      setError(false);
      setShowAsin(false);
    } else {
      setError(true);
      setShowAsin(true);
    }
    setTimeout(() =>setLoading(false), 3000); //3 seconds
  }

  const fakeCallASIN = (asin) => {
    setLoading(true)
    //validate the value first
    if(asin && asin === VALID_ASIN) {
      setError(false);
    } else {
      setError(true);
    }
    setTimeout(() => setLoading(false), 3000); //3 seconds
  }

  const onChangeUrl = (e) => {
    const url = e.target.value;
    setUrl(url);
    fakeCallURL(url);
  };

  const onChangeAsin = (e) => {
    const asin = e.target.value;
    setAsin(asin);
    fakeCallASIN(asin);
  };

  return (
    <div className={classes.root}>
      <Header/>
      <CssBaseline />
      <div style={{background: '#eeeeee'}}>
        <Container component="main" className={classes.main} >
          <div style={{ marginRight: 160, marginLeft: 160, color: '#ffb74d' }}>
            <Typography variant="h4" component="h2" gutterBottom style={{ fontWeight: 'bold' }}>
              2nd Step
            </Typography>
          </div>
          <div style={{ marginRight: 160, marginLeft: 160 }}>
            <Typography variant="h5" component="h2" gutterBottom style={{ fontWeight: 'bold' }}>
              {'Go to Amazon.com and search the word '}
              <Button href="#text-buttons" color="primary">
                {'sleep aid '}
              </Button>
              {'& pick the product is most appealing to you.'}
            </Typography>
            <AlertMessage/>
          </div>
        </Container>
        <Grid container>
          <Grid item xs={6} style={{ background: '#eeeeee' }}>
            <div style={{ marginRight: 160, marginLeft: 200 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                {'Paste the URL of the product that you choose!'}
              </Typography>
              <TextField
                id="filled-full-width"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                value={url}
                onChange={onChangeUrl}
                variant="outlined"
                error={error && !loading}
                helperText={
                  (error && !loading) ?
                    <Error/>
                  : <div/>
                }
              />
            </div>
          </Grid>
          <Grid item xs={6} style={{ background: '#eeeeee', marginBottom: 50 }}>
            {(showAsin) && 
              <div style={{ marginRight: 200, marginLeft: 160 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {'OR Try to find manually the ASIN'}
                </Typography>
                <TextField
                  id="filled-full-width"
                  style={{ margin: 8 }}
                  placeholder="Placeholder"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={asin}
                  onChange={onChangeAsin}
                  variant="outlined"
                  InputProps={{
                    endAdornment: <InputAdornment position="start" onClick={handleClickOpen}>See how</InputAdornment>,
                  }}
                />
              </div>
            }
            {loading && <CircularProgress size={14} />}
            {(!loading && !error) && <ProductCard title={'Cherry Plus Concentrate'} photo={product} />}
          </Grid>
        </Grid>

        <Grid container style={{ width: '100%', marginLeft: '85vh', marginBottom: 10 }} spacing={8}>
          <Grid item xs={12} >
            <ArrowDropDownCircleOutlinedIcon />
          </Grid>
        </Grid>
      </div>

      {(!error && !loading) && 
      <div>
        <Divider style={{ marginTop: 50 }} />
        <footer className={classes.footer}>
          <Container style={{ width: '100vh' }}>
            <Box mx="auto" p={1} >
              <Grid container style={{ width: '100vh' }} spacing={8}>
                <Grid item xs={6} >
                  <Typography variant="h6" component="h4" gutterBottom style={{ marginBottom: 43 }}>
                    {'What made you pick up this product from the search results?'}
                  </Typography>
                  <TextField
                    id="filled-full-width"
                    style={{ margin: 8 }}
                    placeholder="Placeholder"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    multiline
                    rows={8}
                  />
                </Grid>
                <Grid item xs={6} >
                  <Typography variant="h6" component="h4" gutterBottom>
                    {'Looking to the product detail page, what grabs your attention most?\n'}
                    {'What do you like about this product?'}
                  </Typography>
                  <TextField
                    id="filled-full-width"
                    style={{ margin: 8 }}
                    placeholder="Placeholder"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    multiline
                    rows={8}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Box>
          </Container>
          <Grid container style={{ width: '100vh' }} spacing={8}>
            <Grid item xs={12} >
              <Button variant="contained" style={{backgroundColor: '#ffb74d', marginLeft: '50vh', marginTop: 200 ,paddingRight: 150, paddingLeft: 150}}>
                Next
              </Button>
            </Grid>
          </Grid>
        </footer>
      </div>
      }
      <DialogModal open={open} onClose={handleClose} title={'Do you want to know how?'} content={'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.'} />
    </div>
  );
}
import React,{ useEffect, useState } from 'react';
import { Grid, Container, AppBar, Typography, Grow } from '@material-ui/core';
import { useDispatch } from 'react-redux'

import { getPosts } from './actions/posts';
import memories from './images/IMG.jpg';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import indexCss from './index.css';


const  App = () => {
  const classes = useStyles();
  const [ currentId, setCurrentId ] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  },[dispatch]);

  return(
    <Container maxWidth="lg">
      <Grid item xs={12}>
          <AppBar className={classes.appBar} position="static">
            <Typography className={classes.heading} variant="h3" align="center" color="inherit">Memories</Typography>
            <img className={classes.image} src={memories} alt="memories" height="50" />
          </AppBar>
      </Grid>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App;
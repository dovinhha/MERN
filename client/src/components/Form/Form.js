import React from 'react';
import { TextField, Button, Paper, Typography} from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId}) => {

  const dispatch = useDispatch();
  const classes = useStyles();

  const [ postData, setPostData ] = React.useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  });

  const post = useSelector( state => currentId ? state.posts.find(p => p._id===currentId) : null);

  React.useEffect(() => {
    if(post) setPostData(post); 
  },[post])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentId!==0){
      dispatch(updatePost(currentId, postData))
    }
    else{
      dispatch(createPost(postData));
    };
    clear();
  }

  const clear = () => {
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: ''
    });
    setCurrentId(0);
  }

  return (
    <Paper className={classes.paper} elevation={3}>
      <form autoComplete="off" noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
        <Typography variant='h6'>{currentId ? 'Update' : 'Create'} a Memory</Typography>
        <TextField variant="outlined" fullWidth value={postData.creator} label="Creator" onChange={(e) => setPostData({...postData,creator: e.target.value})}/>
        <TextField variant="outlined" fullWidth value={postData.title} label="Title" onChange={(e) => setPostData({...postData,title: e.target.value})}/>
        <TextField variant="outlined" fullWidth value={postData.message} label="Message" onChange={(e) => setPostData({...postData,message: e.target.value})}/>
        <TextField variant="outlined" fullWidth value={postData.tags} label="Tags(some speparated)" onChange={(e) => setPostData({...postData,tags: e.target.value.split(',')})}/>
        <div className={classes.inputFile}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({base64}) => setPostData({...postData,selectedFile: base64})}
          />
        </div>
        <Button className={classes.btnSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" onClick={clear} size="small" fullWidth>{currentId ? 'Close' : 'Cancel'}</Button>
      </form>
    </Paper>
  )
}

export default Form;
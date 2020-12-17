import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    backgroundColor: '#f6f6f6',
    padding: 20
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  btnSubmit: {
    marginBottom: 10
  },
  inputFile: {
    margin: '10px 0',
    width: '100%'
  }
}));
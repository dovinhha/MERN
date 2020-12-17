import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  body: {
    margin: 0,
    padding: 0
  },
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5BC0EB'
  },
  heading: {
    color: '#E55934'
  },
  image: {
    marginLeft: '15px',
    borderRadius: 10
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse'
    }
  }
}));
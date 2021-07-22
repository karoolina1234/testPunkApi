import React, { useState } from 'react';
import { bindActionCreators } from 'redux'
import Header from '../../components/Menu';
import { connect } from 'react-redux'
import { list } from '../../redux/ListReducer'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { ListCard, Desc } from './styles';
import TextField from '@material-ui/core/TextField';
import { remove } from '../../redux/AddReducer';
import { useDispatch, useSelector } from 'react-redux'
import { Delete } from '@material-ui/icons';



const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '21rem',
    maxWidth: '21rem',
    display: 'inline-block',
    verticalAlign: 'text-top',
  },
  media: {
    aspectRatio: 1
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

function Home(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  React.useEffect(() => {
      dispatch(list()) 
  }, [])


  const [title, setTitle] = useState('');
  const lista = useSelector((state)=>state.list)
  const listaAdd = useSelector((state)=>state.lista)



  const listData = Object.assign([], lista.list, listaAdd.lista)

console.log("listDAta",listData)
  return (
    <>
      <Header />
      <ListCard>
        <form className={classes.root} noValidate autoComplete="off">
          <div className="mb-5">
            <TextField
              label="Pesquisar" defaultValue=""
              onChange={event => { setTitle(event.target.value) }}
            />
          </div>
        </form>
        {
           listData.filter((val) => {
              if (title === "") {
                return val
              } else if (val.name.toLowerCase().includes(title.toLowerCase())) {
                return val
              }
            }).map(lista => (

              <Card className={classes.root}>
                <CardHeader
                  action={
                    <IconButton aria-label="delete">
                      <Delete 
                      
                      onClick={()=>dispatch(remove(lista.id))}/>
                    </IconButton>
                  }
                />
                <img src={lista.image_url}
                  style={{ height: 100 }}
                  alt={lista.nome}
                />
                <CardContent>
                  <Desc variant="body2" color="textSecondary" component="p">
                    {lista.name}
                  </Desc>
                  <Desc variant="body2" color="textSecondary" component="p">
                    {lista.description}
                  </Desc>
                </CardContent>
              </Card>


            ))}


      </ListCard>

    </>
  )
}

// const mapStateToProps = state => ({
//   lista: state.list.list,

// })


// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ list }, dispatch)

export default Home;
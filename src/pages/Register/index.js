import React from 'react';
import Header from '../../components/Menu';
  import { save } from '../../redux/AddReducer';
  import { useDispatch } from 'react-redux'

  import { FormControl, Input } from '@material-ui/core';
  import {Formulario} from './styles'

function Register(props) {
    const dispatch = useDispatch();


    const [item, setItem] = React.useState({name:"", description:"", image_url:""})

    function formChange(e) {
        setItem({...item, [e.target.name]: e.target.value})
    }
    function onSubmit(e){
        e.preventDefault();
        dispatch(save(item))
        setItem({name:"", description:"", image_url:""})
    }
    
  return (
      <>
      <Header/>
      <Formulario>
            <form onSubmit={onSubmit}>            
                    <input
                    onChange={formChange}
                    name="name"
                    placeholder="Nome"
                    value={item.name}
                    fullWidth/>
                
                
                    <input 
                    onChange={formChange}
                    name="description"
                    placeholder="descrição"
                    value={item.description}
                    fullWidth/>
               
                    <input 
                    onChange={formChange}
                    name="image_url"
                    placeholder='Url da imagem'
                    value={item.image_url}
                    fullWidth/>
                
                <div className="group-form">
                <button>Salvar</button>
                </div>
               
            </form>
        </Formulario>
      </>
  )
}


export default Register;
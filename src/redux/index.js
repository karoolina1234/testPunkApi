import {combineReducers} from 'redux'
import { addReducer } from './AddReducer';
import { listReducer } from './ListReducer'

const mainReducer  = combineReducers ({
    list: listReducer,
    lista: addReducer
})

export default mainReducer;
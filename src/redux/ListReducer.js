import axios from 'axios'


const http = axios.create({
    baseURL: 'https://api.punkapi.com/v2/'
})

const ACTIONS = {
    LIST: "LIST_DATA",
    ADD: "LIST_ADD",
}




const INITIAL_STATE = {
    list: []
}

export const listReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTIONS.LIST:
            return { ...state, list: action.list }
        default:
            return state
    }
}



export function list() {
    return dispatch => {
        http.get('/beers')
            .then(response => {
                dispatch({
                    type: ACTIONS.LIST,
                    list: response.data
                })
            })
    }
}
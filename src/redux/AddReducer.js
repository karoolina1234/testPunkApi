const ACTIONS = {
    ADD: "LIST_ADD",
    REMOVE: 'LIST_REMOVE'
}

const INITIAL_STATE = {
    lista: []
}


export const addReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTIONS.ADD:
            const items = [...state?.lista, action.item]
            return { ...state, lista: items }
        case ACTIONS.REMOVE:
            const itemsRemove = state?.lista.filter(item=>item.id !== action.id);
            return { itemsRemove}
        default:
            return state
    }
}

export const save = (item) => {
    return {
        type: ACTIONS.ADD,
        item
    }

}

export const remove = (id) =>{
    return{
        type: ACTIONS.REMOVE,
        id
    }
}
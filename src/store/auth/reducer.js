import * as types from '../auth/types'

const initialState = {
    email: null,
    token: localStorage.getItem('remember')  || null,
    id: null,
    name: null,
    phone: null,
    rememberMe: localStorage.getItem('remember') ? true : false,
    applications: {}
}

export const userReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch(type) {
       
        case types.SET_USER:
            return {
                ...state,
                email: payload.email,
                token: payload.token,
                id: payload.id,
                name: payload.name,
                rememberMe: payload.rememberMe
            }

        case types.REMOVE_USER:
            return {
                ...state,
                email: null,
                token: null,
                id: null,
                name: null,
                rememberMe: false
            }

        case types.EDIT_USER:
            return {
                ...state,
                name: payload.name,
                phone: payload.phone
            }

        case types.ADD_AUTH_APPLICATION:
            let copy = Object.assign({}, state)
            copy.applications = {...copy.applications, ...payload}
            return copy

        default:
            return state

    }
}
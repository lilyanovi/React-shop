import * as types from '../auth/types'

export const setUser = (data) => {
    return {
        type: types.SET_USER,
        payload: data   
    }
}
export const removeUser = () => {
    return {
        type: types.REMOVE_USER  
    }
}

export const editUser = (data) => ({
    type: types.EDIT_USER,
    payload: data
})

export const addAuthApplications = (data) => ({
    type: types.ADD_AUTH_APPLICATION,
    payload: data
})
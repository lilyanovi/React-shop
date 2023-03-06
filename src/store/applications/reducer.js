const initialState = {}

export const applicationsReducer = (state = initialState, action) => {
  const { type, payload } = action
  if (type === 'ADD_APPLICATION') {
    return {
      ...state,
     ...payload
    }
  }
  return state
}
const initialState = {}

export const cardReducer = (state = initialState, action) => {
  const {type, payload} = action
  if (type === 'SELECT_CARD') {
    return state = payload
  }
  return state
}
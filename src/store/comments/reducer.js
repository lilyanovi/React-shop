const initialState = []

export const commentsReducer = (state = initialState, action) => {
  const {type, payload} = action
  if (type === 'ADD_COMMENT') {
    return [
      ...state,
      payload
    ]
  }
  return state
}
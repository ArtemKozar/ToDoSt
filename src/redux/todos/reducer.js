import * as a from './actionTypes'

const initialState = []

const toDosReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.ADD_TODO:
      return [...state, action.payload]
    case a.TOGGLE_IS_DONE:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      )
    default:
      return state
  }
}

export default toDosReducer

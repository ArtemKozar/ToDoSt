import * as a from './actionTypes'

export const addToDo = (newToDo) => {
  return {
    type: a.ADD_TODO,
    payload: newToDo,
  }
}

export const toggleIsDone = (id) => {
  return {
    type: a.TOGGLE_IS_DONE,
    payload: id,
  }
}

export const deleteToDo = (id) => {
  return {
    type: a.DELETE_TODO,
    payload: id,
  }
}

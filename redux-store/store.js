import { createStore, combineReducers } from 'redux'
import { MatrixContainer } from '../matrix/matrix'
import { mapDispatchToActions } from './store'

const matrixReducer = (state = {}, action) => {
  let container
  switch (action.type) {
    case 'CREATE_MATRIX':
      container = new MatrixContainer(action.rows, action.columns)
      return Object.assign({}, state, { [matrix.id]: container })
      break;
    case 'UPDATE_MATRIX_VALUE':
      container = state[action.matrixID]
      container.updateValue(action.position, action.value)
      return Object.assign({}, state, { [action.matrixID]: container })
    case 'UPDATE_MATRIX_SIZE':
      container = state[action.matrixID]
      container.updateMatrixSize(action.rows, action.columns)
      return Object.assign({}, state, { [action.matrixID]: container })
    default:
      return state
  }
}


export const reduxStore = createStore(combineReducers(matrixReducer), {})
export const reduxActions = mapDispatchToActions(store.dispatch)

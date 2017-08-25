export const mapDispatchToActions = (dispatch) => {

  return {
    createMatrix: (rows, columns) => dispatch({
      type: 'CREATE_MATRIX',
      rows: rows,
      columns: columns
    }),

    updateMatrixValue: (position, value, matrixID) => dispatch({
      type: 'UPDATE_MATRIX_VALUE',
      matrixID: matrixID,
      position: position,
      value: value
    }),

    updateMatrixSize: (rows, columns, matrixID) => dispatch({
      type: 'UPDATE_MATRIX_SIZE',
      rows: rows,
      columns: columns,
      matrixID: matrixID
    }),

    transpose: (matrixID) => dispatch({
      type: 'TRANSPOSE',
      matrixID: matrixID
    })
  }

}

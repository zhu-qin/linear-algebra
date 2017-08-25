export function transpose(matrix) {
  let rowCount = matrix[0].length
  let columnCount = matrix.length
  return Array(rowCount).fill().map((row, rowIdx) => {
    return Array(columnCount).fill().map((col, colIdx) => {
      return {
        position: [rowIdx, colIdx],
        value: matrix[colIdx][rowIdx].value
      }
    })
  })
}

export function flattenMatrixMap(matrix) {
  let mappedMatrix = {}
  matrix.forEach((row, rowIdx) => {
    row.forEach((unit, colIdx) => {
      mappedMatrix[`${[rowIdx, colIdx]}`] = unit
    })
  })
  return mappedMatrix
}

export function createMatrix(rowCount, columnCount, oldMatrix) {
  let mappedMatrix = oldMatrix ? flattenMatrixMap(oldMatrix) : {}
  return Array(rowCount).fill().map((row, rowIdx) => {
    return Array(columnCount).fill().map((col, colIdx) => {
      let oldValue = mappedMatrix[`${[rowIdx, colIdx]}`]
      return {
        position: [rowIdx, colIdx],
        value: oldValue ? oldValue.value : 0
      }
    })
  })
}


export class MatrixContainer {

  constructor(rows, columns) {
    this.rows = rows
    this.columns = columns
    this.matrix = createMatrix(rows, columns)
  }

  transpose() {
    let rowCount = this.matrix[0].length
    let columnCount = this.matrix.length
    return Array(rowCount).fill().map((row, rowIdx) => {
      return Array(columnCount).fill().map((col, colIdx) => {
        return {
          position: [rowIdx, colIdx],
          value: this.matrix[colIdx][rowIdx].value
        }
      })
    })
  }

  updateMatrixSize(rows, columns) {
    this.matrix = createMatrix(rows, columns, this.matrix)
  }

  updateValue(position, value) {
    this.matrix[position[0]][position[1]].value = value
  }

}

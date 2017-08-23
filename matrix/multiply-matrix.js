import { transpose } from './matrix'


export function multiplyMatrix() {
  let currentResult = arguments[0]
  for (let i = 1; i < arguments.length; i++) {
    currentResult = multiplyTwoMatrices(currentResult, arguments[i])
  }
  return currentResult
}


function multiplyTwoMatrices(matrixOne, matrixTwo) {
  let transposed = transpose(matrixTwo)
  for (let row = 0; row < matrixOne.length; row ++) {

  }
}

function dotProduct(row, column) {
  return row.reduce((sum, el, idx) => {
    sum = sum + row[idx]*column[idx]
    return sum
  })
}

export function multiplyMatrix() {
  let currentResult
  for (let i = 1; i < arguments.length; i++) {

  }
}


function multiplyTwoMatrices(matrixOne, matrixTwo) {
  matrixOne.forEach((row, rowIdx) => {
    
  })
}

function dotProduct(row, column) {
  return row.reduce((sum, el, idx) => {
    sum = sum + row[idx]*column[idx]
    return sum
  })
}

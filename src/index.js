module.exports = function towelSort(matrix) {
    let arr = []
    if (matrix != null && matrix.length > 0 ) {
      for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
          for (let k = 0; k < matrix[i].length; k++) {
            console.log(matrix[i][k])
            arr.push(matrix[i][k])
          }
        } else {
          for (let k = matrix[i].length - 1; k >= 0; k--) {
            console.log(matrix[i][k])
            arr.push(matrix[i][k])
          }
        }
      }
    }
    return arr;
  }
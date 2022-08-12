module.exports = function towelSort (matrix) {
    const half = matrix.length / 2
    if(matrix.length < 2){
      return matrix 
    }
    const left = matrix.splice(0, half)
    return towelSort(towelSort(left),towelSort(matrix))
  }
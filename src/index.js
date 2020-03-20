
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let array = []; 
    if (matrix == undefined) return [];
    for(let a = 0 ; a < matrix.length; a++ ) {
      if (a % 2 == 0) { 
        array.push(...matrix[a])
      }
      else array.push(...matrix[a].reverse())
    }
    return array; 
  }


// You should implement your task here.

module.exports = function towelSort (matrix) {
  let resultArray = [];
  if (!Array.isArray(matrix)) {
      resultArray = [];
  } else {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 !== 0) {
        resultArray = resultArray.concat(matrix[i].reverse());
      } else {
        resultArray = resultArray.concat(matrix[i]);
      }
    }
  }
  return resultArray;
}

module.exports = function solveSudoku(matrix) {

  function checkCell(row, col, number) {
    return (checkByRow(row, number) || checkByCol(col, number) || checkBySector(row, col, number)) ? true : false;
  }

  function findSolution (matrix) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {

        if (matrix[row][col] == 0) {
          for (let number = 1; number <= 9; number++) {
            if (checkCell(row, col, number) === false) { // при обнаружении 0 в ячейке присваиваем ей число
              matrix[row][col] = number;

              if (findSolution(matrix)) {
                return true;
              } else {
                matrix[row][col] = 0;
              }

            }
          }
          return false;
        }

      }
    }
    return true;
  }
  findSolution(matrix);

  function checkByRow(row, number) {
    for (let i = 0; i < 9; i++) {
      if (matrix[row][i] == number) {
        return true;
      }
    }
    return false;
  }

  function checkByCol(col, number) {
    for (let i = 0; i < 9; i++) {
      if (matrix[i][col] == number) {
        return true;
      }
    }
    return false;
  }

  function checkBySector(row, col, number) {
    var rowInSector = Math.floor(row / 3); // номер сектора по ряду
    var colInSector = Math.floor(col / 3);
    for (let i = rowInSector * 3; i < rowInSector * 3 + 3; i++) {
      for (let j = colInSector * 3; j < colInSector * 3 + 3; j++) {
        if (matrix[i][j] == number) {
          return true;
        }
      }
    }
    return false;
  }

  return matrix;
}

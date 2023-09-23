
// You should implement your task here.

module.exports = function towelSort(matrix) {

  let result = [];

  if (Array.isArray(matrix)) {
    let revers = false;
    matrix.forEach(el => {
      if (Array.isArray(el)) {
        if (revers) {
          el.reverse();
        }
        revers = !revers;
      }
      result = result.concat(el);
    });
  }
  return result;
}

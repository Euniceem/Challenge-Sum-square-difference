/*  SumOfASquare(naturalNumbers)
 *
 *  @param naturalNumbers        1...naturalNumbers to square and add
 *  @method sumOfSquares()       returns ths sum of all 'naturalNumbers' squared
 *  @method squareOfTheSums()    returns the square of all 'naturalNumbers'
 */
exports.SumOfASquare = SumOfASquare;

function SumOfASquare(naturalNumbers) {
  this.naturalNumbers = naturalNumbers;
}

SumOfASquare.prototype.SumOfASquares = function () {
  let squareSums = 0;
  for (var i = 1; i <= this.naturalNumbers; i++) {
    squareSums += Math.pow(i, 2);
    return squareSums;
  }

  SumOfASquare.prototype.squareOfTheSums() {
    let squareSums = 0;
    for (var i = 1; i <= this.naturalNumbers; i++) {
      squareSums += i;
    }
    return Math.pow(squareSums, 2);
  };

// overwrite the object prototype, or add methods to the prototype
// to satisfy the two method calls, sumOfSquares() and squareOfTheSums()

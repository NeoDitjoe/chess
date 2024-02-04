import piecesMove from "./AdragandDrop"

/**
 * 
 * @param {*} piece it is the current dragged piece
 * @param {*} pieceSpace - it is where the piece will be dropped
 */

const castlePiece = function (piece, pieceSpace) {

  /**
   * Each piece has a unique id which desctibes the  piece's position 
   * E.G ID = 1-2 means 1 will be the row while 2 is the column
   * 
   * so id is split by "-" to use the row and column seperately
   * 
   * {@link getcurrentPieceId} is the id of {@link piece} 
   * 
   * {@link getcurrentdropPieceId} is the id of {@link pieceSpace}
   * 
   */
  const getcurrentPieceId = piece.id.split('-')
  const getcurrentdropPieceId = pieceSpace.id.split('-')

  /**
   * The castle piece move straight up, straight down, left and right.
   * 
   * {@link upAndDownMovement} is a boolean that checks the columns id of both
   * {@link piece} and {@link pieceSpace}
   */
  const upAndDownMovement = getcurrentPieceId[1] === getcurrentdropPieceId[1]

  /**
   * {@link leftAndRightMovement} is a boolean that checks the rows id of both
   * {@link piece} and {@link pieceSpace} 
   */
  const leftAndRightMovement = getcurrentPieceId[0] === getcurrentdropPieceId[0]

  if (upAndDownMovement || leftAndRightMovement) {
    piecesMove(piece, pieceSpace)
  }
}

export default castlePiece
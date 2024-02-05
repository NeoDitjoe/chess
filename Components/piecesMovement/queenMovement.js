const { piecesId } = require("../pieces")
const { default: piecesMove } = require("./AdragandDrop")


const queenMovement = function (piece, pieceSpace) {

  const {
    currentPieceRow,
    currentPiececolumn,
    dropOnRow,
    dropOnColumn
  } = piecesId(piece, pieceSpace)

  //castle logic
  const upDownLeftRight =
    currentPieceRow === dropOnRow
    || currentPiececolumn === dropOnColumn

  //bishop logic
  const num = currentPieceRow - currentPiececolumn
  const leftUp = dropOnRow - dropOnColumn === num

  const upright =
    dropOnColumn + dropOnRow
    === currentPiececolumn + currentPieceRow

  if (upDownLeftRight || leftUp || upright) {

    piecesMove(piece, pieceSpace)
  }
}

export default queenMovement
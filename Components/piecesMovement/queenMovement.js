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
  const leftUpRightDown = dropOnRow - dropOnColumn === num

  const RightupLeftDown =
    dropOnColumn + dropOnRow
    === currentPiececolumn + currentPieceRow

  if (upDownLeftRight || leftUpRightDown || RightupLeftDown) {

    piecesMove(piece, pieceSpace)
  }
}

export default queenMovement
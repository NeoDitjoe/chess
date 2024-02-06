const { piecesId } = require("../pieces")
const { default: piecesMove } = require("./AdragandDrop")


const kingMovement = function (piece, pieceSpace) {

  const {
    dropOnColumn,
    dropOnRow,
    currentPiececolumn,
    currentPieceRow
  } = piecesId(piece, pieceSpace)

  const columnA = dropOnColumn === currentPiececolumn - 1
  const columnB = dropOnColumn === currentPiececolumn + 1

  const rowA = dropOnRow === currentPieceRow - 1
  const rowB = dropOnRow === currentPieceRow + 1

  if (columnA || columnB || rowA) {

    piecesMove(piece, pieceSpace)
  }
}

export default kingMovement
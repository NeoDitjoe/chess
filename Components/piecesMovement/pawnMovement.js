import pieces, { piecesId } from "../pieces"
const { default: piecesMove } = require("./AdragandDrop")

const pawnPiece = function (piece, pieceSpace) {

  if (piece.src.includes('pawnBlack')) {
    blackPawn(piece, pieceSpace)
  }

  if (piece.src.includes('pawnWhite')) {
    whitePawn(piece, pieceSpace)
  }
}


function blackPawn(piece, pieceSpace) {
  const {
    currentPieceRow,
    currentPiececolumn,
    dropOnRow,
    dropOnColumn } = piecesId(piece, pieceSpace)

  piecesMove(piece, pieceSpace)
}

function whitePawn(piece, pieceSpace) {

  const {
    currentPieceRow,
    currentPiececolumn,
    dropOnRow,
    dropOnColumn
  } = piecesId(piece, pieceSpace)

  const moveFouthOneBlock = currentPieceRow - 1 === dropOnRow
  const sameColumn = currentPiececolumn === dropOnColumn || pieceSpace.src.includes('Black')
  const firstMoveA = currentPieceRow == 6 && dropOnRow === 4 || dropOnRow === 5
  const getOpps = pieceSpace.src.includes('blank')
  const getBlack = getOpps || pieceSpace.src.includes('black') && !sameColumn
  const noBackMovement = currentPieceRow > dropOnRow

  const moves = moveFouthOneBlock && sameColumn || firstMoveA && sameColumn
  // const movesB = 

  if (noBackMovement && moves) {

    piecesMove(piece, pieceSpace)
  }

}

export default pawnPiece
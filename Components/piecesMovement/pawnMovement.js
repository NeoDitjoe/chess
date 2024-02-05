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
    dropOnColumn 
  } = piecesId(piece, pieceSpace)

  const moveFouthOneBlock = currentPieceRow + 1 === dropOnRow
  const sameColumn = currentPiececolumn === dropOnColumn
  const firstMoveA = currentPieceRow == 1 && dropOnRow === 3 || dropOnRow === 2
  const noBackMovement = currentPieceRow < dropOnRow
  const moves = moveFouthOneBlock && sameColumn || firstMoveA && sameColumn


  if(noBackMovement && moves){
    piecesMove(piece, pieceSpace)
  }
}

function whitePawn(piece, pieceSpace) {

  const {
    currentPieceRow,
    currentPiececolumn,
    dropOnRow,
    dropOnColumn
  } = piecesId(piece, pieceSpace)

  const moveFouthOneBlock = currentPieceRow - 1 === dropOnRow
  const sameColumn = currentPiececolumn === dropOnColumn
  const firstMoveA = currentPieceRow == 6 && dropOnRow === 4 || dropOnRow === 5
  const noBackMovement = currentPieceRow > dropOnRow
  const moves = moveFouthOneBlock && sameColumn || firstMoveA && sameColumn

  if (noBackMovement && moves) {

    piecesMove(piece, pieceSpace)
  }

}

export default pawnPiece
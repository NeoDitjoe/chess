import piecesMove from "./AdragandDrop"
import { piecesId } from "../pieces"

const bishopPiece = function (piece, pieceSpace) {

  const {
    currentPieceRow, currentPiececolumn,
    dropOnRow, dropOnColumn

  } = piecesId(piece, pieceSpace)

  const num = currentPieceRow - currentPiececolumn
  const leftUp = dropOnRow - dropOnColumn === num

  const upright = 
    dropOnColumn + dropOnRow 
    === currentPiececolumn + currentPieceRow

  if (leftUp || upright) {
    piecesMove(piece, pieceSpace)
  }
}

export default bishopPiece
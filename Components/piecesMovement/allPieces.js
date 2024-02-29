import bishopPiece from "./bishopMovement"
import castlePiece from "./castleMovement"
import kingMovement from "./kingMovement"
import nightPiece from "./nightMovement"
import pawnPiece from "./pawnMovement"
import queenMovement from "./queenMovement"

export default function allPiecesMovement(piece, pieceSpace){

  if (piece.src.includes('castle')) {
    castlePiece(piece, pieceSpace)
  }

  if (piece.src.includes('night')) {
    nightPiece(piece, pieceSpace)
  }

  if (piece.src.includes('bishop')) {
    bishopPiece(piece, pieceSpace)
  }

  if (piece.src.includes('queen')) {
    queenMovement(piece, pieceSpace)
  }

  if (piece.src.includes('king')) {
    kingMovement(piece, pieceSpace)
  }

  if (piece.src.includes('pawn')) {
    pawnPiece(piece, pieceSpace)
  }
}
import piecesMove from "./AdragandDrop"
import { piecesId } from "../pieces"

const nightPiece = function (piece, pieceSpace) {

  const { 
    currentPieceRow, currentPiececolumn ,
    dropOnRow, dropOnColumn
  
  } = piecesId(piece, pieceSpace)

  /**
   * {@link downSplit} boolean - 
   */
  const downRight = 
    currentPieceRow + 1 === dropOnRow
    && currentPiececolumn + 2 === dropOnColumn 
    || currentPieceRow + 2 === dropOnRow 
    &&currentPiececolumn + 1 === dropOnColumn

  const downLeft = 
    currentPieceRow + 1 === dropOnRow
    && currentPiececolumn - 2 === dropOnColumn 
    || currentPieceRow + 2 === dropOnRow
    && currentPiececolumn - 1 === dropOnColumn

  const upRight = 
    currentPieceRow - 2 === dropOnRow
    && currentPiececolumn + 1 === dropOnColumn
    || currentPieceRow - 1 === dropOnRow
    && currentPiececolumn + 2 === dropOnColumn

  const upLeft = 
    currentPieceRow - 2 === dropOnRow
    && currentPiececolumn - 1 === dropOnColumn
    || currentPieceRow - 1 === dropOnRow
    && currentPiececolumn - 2 === dropOnColumn
    
    if (downRight || downLeft || upRight || upLeft)   {
      piecesMove(piece, pieceSpace)

    }
    
}

export default nightPiece
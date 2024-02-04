import piecesMove from "./AdragandDrop"

const nightPiece = function (piece, pieceSpace) {

  const currentPieceRow = Number(piece.id.split('-')[0])
  const currentPiececolumn = Number(piece.id.split('-')[1])

  const dropOnRow = Number(pieceSpace.id.split('-')[0])
  const dropOnColumn = Number(pieceSpace.id.split('-')[1])

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

      if(pieceSpace){
        piece.src = ''
        piece.srcset = ''
      }
    }
    
}

export default nightPiece
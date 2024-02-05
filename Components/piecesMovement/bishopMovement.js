import piecesMove from "./AdragandDrop"
import { piecesId } from "../pieces"

const bishopPiece = function (piece, pieceSpace) {

  const {
    currentPieceRow, currentPiececolumn,
    dropOnRow, dropOnColumn

  } = piecesId(piece, pieceSpace)

  // const upLeft = currentPieceRow > dropOnRow
  //   && currentPiececolumn > dropOnColumn 
  //   && currentPieceRow !== dropOnRow

  // const upRightAndDL = currentPiececolumn < dropOnColumn
  // && currentPieceRow !== dropOnRow

  // const downLeft = currentPieceRow < dropOnRow
  // && currentPiececolumn > dropOnColumn
  // && currentPieceRow !== dropOnRow

  const restrictRowAndColumn = 
  currentPieceRow !== dropOnRow 
  && currentPiececolumn !== dropOnColumn

  //white right 
  const upLeft = 
  // currentPieceRow > dropOnRow
  // && currentPiececolumn > dropOnColumn 
  // && currentPieceRow - currentPiececolumn == 2
  // &&  dropOnRow - dropOnColumn == 2
  currentPieceRow > dropOnRow 
  && currentPiececolumn > dropOnColumn 
  || currentPieceRow === currentPiececolumn
  || currentPieceRow - currentPiececolumn == 2
  ||currentPiececolumn - currentPieceRow == 2
  || dropOnRow == dropOnColumn
  || dropOnRow - dropOnColumn == 2
  || dropOnColumn - dropOnRow == 2

  const upRight = 
    currentPieceRow > dropOnRow
    && currentPiececolumn < dropOnColumn



  console.log('cR' + currentPieceRow, ' cC' + currentPiececolumn + ' dR' + dropOnRow + ' dC' + dropOnColumn)
  if (upLeft) {
  // if (upLeft || upRightAndDL || downLeft) {
    piecesMove(piece, pieceSpace)
  }
}

export default bishopPiece
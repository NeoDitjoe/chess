const { piecesId } = require("../pieces")
const { default: piecesMove } = require("./AdragandDrop")


const kingMovement = function (piece, pieceSpace) {

  const {
    dropOnColumn,
    dropOnRow,
    currentPiececolumn,
    currentPieceRow
  } = piecesId(piece, pieceSpace)

  const down = currentPiececolumn === dropOnColumn && currentPieceRow + 1 === dropOnRow
  const up = currentPiececolumn === dropOnColumn && currentPieceRow - 1 === dropOnRow

  const right = currentPieceRow === dropOnRow && currentPiececolumn + 1 === dropOnColumn
  const left = currentPieceRow === dropOnRow && currentPiececolumn - 1 === dropOnColumn

  const rightDown = currentPieceRow + currentPiececolumn === dropOnRow + dropOnColumn && currentPieceRow + 1 === dropOnRow
  const rightUp = currentPieceRow + dropOnColumn === currentPiececolumn + dropOnRow && currentPieceRow - 1 ===dropOnRow

  const leftUp = currentPieceRow + currentPiececolumn === dropOnRow + dropOnColumn && currentPieceRow - 1 === dropOnRow
  const leftDown = currentPieceRow + dropOnColumn === currentPiececolumn + dropOnRow && currentPieceRow + 1 ===dropOnRow

  if(down ||  up || right|| left || leftDown || leftUp || rightUp || rightDown){
    piecesMove(piece, pieceSpace)
  }

  console.log("Crow" + currentPieceRow + 'Ccolumn' + currentPiececolumn) 
  console.log("Drow" + dropOnRow + 'Dcolumn' + dropOnColumn) 
}

export default kingMovement
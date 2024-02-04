
/**
 * 
 * @param {string} piece - it is the current dragged piece
 * @param {string} pieceSpace - it is where the piece will be dropped
 * 
 * This is a drag and drop functionality 
 */
const piecesMove = function(piece, pieceSpace){
  const draggedpiece = piece.src
  const dropPiece = pieceSpace.src

  piece.src = dropPiece
  pieceSpace.src = draggedpiece
  piece.srcset = ''
  pieceSpace.srcset = ''
}

export default piecesMove
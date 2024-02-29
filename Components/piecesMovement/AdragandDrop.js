import blank from '../../public/blank.png'

/**
 * 
 * @param {string} piece - it is the current dragged piece
 * @param {string} pieceSpace - it is where the piece will be dropped
 * 
 * This is a drag and drop functionality 
 * The image with position get swapped using the src
 */
const piecesMove = function (piece, pieceSpace) {
  const draggedpiece = piece.src
  const dropPiece = pieceSpace.src

  if (dropPiece.includes('blank')) {
    piece.src = dropPiece
    pieceSpace.src = draggedpiece
    piece.srcset = ''
    pieceSpace.srcset = ''
  }else{
    piece.src = dropPiece
    pieceSpace.src = draggedpiece
    piece.srcset = ''
    pieceSpace.srcset = ''

    setTimeout(() => {
      piece.src = blank.src
      piece.srcset = ''
    }, 10);
  }
}

export default piecesMove


/**
 * 
 * @param {string} piece - it is the current dragged piece
 * @param {string} pieceSpace - it is where the piece will be dropped
 * 
 * pawn have their own movement funtion because it can own take on  
 * side ways
 */
export const pawnPieceMove =  function (piece, pieceSpace) {

  const draggedpiece = piece.src
  const dropPiece = pieceSpace.src

  piece.src = dropPiece
  pieceSpace.src = draggedpiece
  piece.srcset = ''
  pieceSpace.srcset = ''

}
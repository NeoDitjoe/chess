import blank from '../public/blank.png'
import castleBlack from  '../public/castleBlack.png'
import nightBlack from '../public/nightBlack.png'
import bishopBlack from '../public/bishopBlack.png'
import queenBlack from '../public/queenBlack.png'
import kingBlack from '../public/kingBlack.png'
import pawnBlack from '../public/pawnBlack.png'

import castleWhite from  '../public/castleWhite.png'
import nightWhite from '../public/nightWhite.png'
import bishopWhite from '../public/bishopWhite.png'
import queenWhite from '../public/queenWhite.png'
import kingWhite from '../public/kingWhite.png'
import pawnWhite from '../public/pawnWhite.png'


const pieces = [ castleBlack, nightBlack, bishopBlack , 
  queenBlack, kingBlack, bishopBlack, nightBlack, castleBlack,
  
  pawnBlack, pawnBlack, pawnBlack, pawnBlack, pawnBlack, 
  pawnBlack, pawnBlack, pawnBlack,

  blank, blank, blank, blank, blank, blank, blank, blank,
  blank, blank, blank, blank, blank, blank, blank, blank,
  blank, blank, blank, blank, blank, blank, blank, blank,
  blank, blank, blank, blank, blank, blank, blank, blank,

  pawnWhite, pawnWhite, pawnWhite, pawnWhite, pawnWhite, pawnWhite,
  pawnWhite, pawnWhite,

  castleWhite, nightWhite, bishopWhite, kingWhite, queenWhite,
  bishopWhite, nightWhite, castleWhite
]

export default pieces

export function piecesId(piece, pieceSpace){
  const currentPieceRow = Number(piece.id.split('-')[0])
  const currentPiececolumn = Number(piece.id.split('-')[1])

  const dropOnRow = Number(pieceSpace.id.split('-')[0])
  const dropOnColumn = Number(pieceSpace.id.split('-')[1])

  return{ 
    currentPieceRow,
    currentPiececolumn,
    dropOnRow,
    dropOnColumn
  }
}
import { useEffect, useState } from "react"
import style from './board.module.css'
import Image from "next/image"
import pieces from "../pieces" // keeps an array of pieces


//pieceMove
import castlePiece, { castleOpenSpace } from "../piecesMovement/castleMovement"//piece logic
import nightPiece from "../piecesMovement/nightMovement"// piece logic
import bishopPiece from "../piecesMovement/bishopMovement"
import pawnPiece from "../piecesMovement/pawnMovement"
import queenMovement from "../piecesMovement/queenMovement"
import kingMovement from "../piecesMovement/kingMovement"

export default function Board() {

  let piece // the current dragged piece
  let pieceSpace // where the dragged piece is placed


  //creates blocks from 1-64
  let blocksIndex = 0
  const blocksIndeArr = []

  const blocksNum = 8 // the number of row || colums
  const blocks = [] /* stores the number of rows || colums [1, 2 ...64] */

  for (let i = 0; i < blocksNum; i++) {
    blocks.push(i)
  }

  function dragStart(event) {
    piece = event.target

  }

  function onDrop(event) {
    pieceSpace = event.target
  }

  function dragEnd(e) {

    if (piece.src.includes('Black') 
      && !pieceSpace.src.includes('Black') 
      || piece.src.includes('White')
      && !pieceSpace.src.includes('White')
    ) {

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

      if (piece.src.includes('pawn')) {
        pawnPiece(piece, pieceSpace)
      }

      if (piece.src.includes('king')) {
        kingMovement(piece, pieceSpace)
      }
    }

  }

  return (
    <main>
      <div className={style.board}>
        {
          blocks.map((i) => (
            blocks.map((j) => {
              blocksIndeArr.push(blocksIndex += 1)

              const Y = blocksIndex % 2 === 0
              const Z = blocksIndex % 2 !== 0

              const row1 = blocksIndex < 9 && Y
              const row2 = blocksIndex > 8 && blocksIndex < 16 && Z
              const row3 = blocksIndex > 16 && blocksIndex < 25 && Y
              const row4 = blocksIndex > 24 && blocksIndex < 33 && Z
              const row5 = blocksIndex > 32 && blocksIndex < 41 && Y
              const row6 = blocksIndex > 40 && blocksIndex < 48 && Z
              const row7 = blocksIndex > 48 && blocksIndex < 57 && Y
              const row8 = blocksIndex > 56 && blocksIndex < 64 && Z

              const colorBlocks = row1 || row2 || row3 || row4 || row5 || row6 || row7 || row8
              return (
                <div className={colorBlocks ? style.block : style.blockB}>

                  <Image
                    src={pieces[blocksIndeArr.shift() - 1]}
                    width='100px'
                    height='100px'
                    className={style.img}
                    id={i + '-' + j}
                    alt={i + '-' + j}

                    draggable
                    onDragStart={dragStart}
                    onDragOver={(e) => e.preventDefault()}
                    onDragEnter={(e) => e.preventDefault()}
                    onDrop={onDrop}
                    onDragEnd={dragEnd}
                  />
                </div>
              )
            })
          ))
        }
      </div>
    </main>
  )
}

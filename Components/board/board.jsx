import { useEffect, useState } from "react"
import style from './board.module.css'
import Image from "next/image"
import pieces from "../pieces" // keeps an array of pieces


//pieceMove
import castlePiece from "../piecesMovement/castleMovement"//piece logic
import nightPiece from "../piecesMovement/nightMovement"// piece logic

export default function Board() {

  let piece // the current dragged piece
  let pieceSpace // is the drag end, where the dragged piece might be placed


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
    console.log(event.target.src)
  }

  function onDrop(event) {
    pieceSpace = event.target
  }

  function dragEnd(e) {

    //player 1, number 1 castle 
    if (piece.src.includes('_next/image?url=%2F_next%2Fstatic%2Fmedia%2FcastleBlack.5c11874f.png&w=384&q=75')) {
      castlePiece(piece, pieceSpace)
    }

    //player 1, number 1 night
    if(piece.src.includes('_next/image?url=%2F_next%2Fstatic%2Fmedia%2FnightBlack.cdf2a2ca.png&w=384&q=75')) {
      nightPiece(piece, pieceSpace)
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
              const row7 = blocksIndex > 48 && blocksIndex < 57&& Y
              const row8 = blocksIndex > 56 && blocksIndex < 64 && Z

              const colorBlocks = row1 || row2 || row3 || row4 || row5 || row6 || row7 || row8
              return (
                <div className={colorBlocks ? style.block : ''}>
                  <Image
                    src={pieces[blocksIndeArr.shift() - 1]}
                    width='100px'
                    height='100px'
                    className={style.img}
                    id={i + '-' + j}

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

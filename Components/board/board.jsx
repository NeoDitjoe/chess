import { useEffect, useState } from "react"
import style from './board.module.css'
import Castle from "../castle/castle"
import castle from '../../public/castle.JPG'
import night from '../../public/night.png'
import Image from "next/image"

export default function Board() {

  let piece // basically the dragstart
  let pieceSpace // is the drag end, where the gragged piece might be placed

  // const pieces = [ <Castle dragEnd={dragEnd} dragStart={dragStart} />  ]
  const pieces = [castle, night]
  //creates an Index for the blocks from 1-64
  let blocksIndex = 0
  const blocksIndeArr = []

  const blocksNum = 8 // the number of row || colums
  const blocks = [] /* stores the number of rows || colums [1, 2 ...] */

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
    console.log('start' + piece.id + 'end' + pieceSpace.id)
    if (piece.src.includes('_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcastle.f3e04c4c.JPG&w=1080&q=75')) {
      castlePiece(piece, pieceSpace)
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

const castlePiece = function (piece, pieceSpace) {

  const getcurrentPieceId = piece.id.split('-')
  const getcurrentdropPieceId = pieceSpace.id.split('-')
  const upAndDownMovement = getcurrentPieceId[1] === getcurrentdropPieceId[1]
  const leftAndRightMovement = getcurrentPieceId[0] === getcurrentdropPieceId[0]

  if (upAndDownMovement || leftAndRightMovement) {
    const draggedpiece = piece.src
    const dropPiece = pieceSpace.src

    piece.src = dropPiece
    pieceSpace.src = draggedpiece
    piece.srcset = ''
    pieceSpace.srcset = ''
  }


}

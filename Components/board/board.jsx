import { useEffect, useState } from "react" 
import style from './board.module.css'
import Castle from "../castle/castle"
import castle from '../../public/castle.JPG'
import night from '../../public/night.png'
import Image from "next/image"

export default function Board(){

  let piece // basically the dragstart
  let pieceSpace // is the drag end, where the gragged piece might be placed
  
  // const pieces = [ <Castle dragEnd={dragEnd} dragStart={dragStart} />  ]
  const pieces = [ castle, night ]
  //creates an Index for the blocks from 1-64
  let blocksIndex = 0
  const blocksIndeArr = []
  
  const blocksNum = 8 // the number of row || colums
  const blocks = [] /* stores the number of rows || colums [1, 2 ...] */

  for( let i = 0; i < blocksNum; i++){
    blocks.push(i)
  }

  function dragStart(event){
    piece = event.target
    console.log(event.target.src)
  }

  function onDrop(event){
    pieceSpace = event.target
  }

  function dragEnd(e){
    console.log('start' + piece.id + 'end' + pieceSpace.id)

    if(piece.src === 'http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcastle.f3e04c4c.JPG&w=1080&q=75'){
      castlePiece(piece, pieceSpace)
    }
    
  }

  return(
    <main>
      <div className={style.board}>
        {
          blocks.map((i) => (
            blocks.map((j) => {
              blocksIndeArr.push(blocksIndex += 1)
              return(
                <Image
                  src={pieces[blocksIndeArr.shift() - 1]}
                  width='100px'
                  height='100px'
                  className={style.img}
                  id={i +'-'+ j}

                  draggable
                  onDragStart={dragStart}
                  onDragOver={(e) => e.preventDefault()}
                  onDragEnter={(e) => e.preventDefault()}
                  onDrop={onDrop}
                  onDragEnd={dragEnd}
                />
                // <div
                //   className={style.blocks}
                //   onDragOver={(e) => e.preventDefault()}
                //   onDragEnter={(e) => e.preventDefault()}
                //   onDrop={onDrop}
                // >
                //   {pieces[blocksIndeArr.shift() - 1]}
                // </div>
              )
            })
          ))
        }
      </div>
    </main>
  )
}

const castlePiece = function( piece, pieceSpace){

  const getcurrentPieceId = piece.id.split('-')
  const getcurrentdropPieceId = pieceSpace.id.split('-')
  const upAndDownMovement = getcurrentPieceId[1] === getcurrentdropPieceId[1]
  const leftAndRightMovement = getcurrentPieceId[0] === getcurrentdropPieceId[0]

  if(upAndDownMovement || leftAndRightMovement){
    const draggedpiece = piece.src
    const dropPiece = pieceSpace.src
  
    piece.src = dropPiece
    pieceSpace.src = draggedpiece
    piece.srcset = ''
    pieceSpace.srcset = ''
  }


}
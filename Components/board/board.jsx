import { useEffect, useState } from "react" 
import style from './board.module.css'
import Castle from "../castle/castle"
import castle from '../../public/o.JPG'
import night from '../../public/p.png'
import Image from "next/image"

export default function Board(){

  let piece
  let pieceSpace
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
    console.log(piece.src === 'http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fo.5fe2ea15.JPG&w=3840&q=75')
  }

  function onDrop(event){
    pieceSpace = event.target
  }

  function dragEnd(e){

    

    if(piece.src === 'http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fo.5fe2ea15.JPG&w=3840&q=75'){
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

  console.log(piece.id)

  const getcurrentPieceId = piece.id.split('-')
  const getcurrentdropPieceId = piece.id.split('-')
  const upAndDownMovement = getcurrentPieceId[1] === getcurrentdropPieceId[1]

  if(upAndDownMovement){
    const draggedpiece = piece.src
    const dropPiece = pieceSpace.src
  
    piece.src = dropPiece
    pieceSpace.src = draggedpiece
    piece.srcset = ''
    pieceSpace.srcset = ''
  }

  // console.log(pieceSpace.innerText)
  // console.log(piece.innerText)
}
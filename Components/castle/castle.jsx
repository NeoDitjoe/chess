import Image from 'next/image'
import style from './castle.module.css'
import castle from '../../public/o.JPG'

export default function Castle(props){

  const {dragStart, dragEnd} = props

  let piece
  let pieceSpace
  // function dragStart(event){
  //   piece = event.target
  // }

  // function onDrop(event){
  //   pieceSpace = event.target
  // }

  // function dragEnd(e){

  //   onePiece(piece, pieceSpace)
  // }

  return(
    <Image
      src={castle}
      alt='castle'
      width='100px'
      height='100px'
      className={style.img}
      // id={i +'-'+ j}

      draggable
      onDragStart={dragStart}
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={(e) => e.preventDefault()}
      // onDrop={onDrop}
      onDragEnd={dragEnd}
  />
  )
}

const onePiece = function( piece, pieceSpace){

  // const draggedpiece = piece.src
  // const dropPiece = pieceSpace.src

  // piece.src = dropPiece
  // pieceSpace.src = draggedpiece
  // piece.srcset = ''
  // pieceSpace.srcset = ''

  console.log(piece)
  console.log(pieceSpace)

  console.log(piece.alt)
}
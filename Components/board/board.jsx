import { useEffect, useState } from "react" 
import style from './board.module.css'
import Castle from "../castle/castle"

export default function Board(){

	const [divContents, setDivContents] = useState([null])

  console.log(divContents)

	function hanleDrop(index){
    setDivContents([null])

    setTimeout(() => {
      setDivContents((prevContents) => {
        const newContents = [...prevContents]
        newContents[index] = index
        return newContents
      })
    }, 100);
	} 

	return(
		<div>
      <div style={{display: 'flex'}}>
        { 
          [1,2,3,4,5,6].map((index) => (
            <div
              key={index}
              className={style.block}
              onDragOver={(e) => {
                e.preventDefault()
              }}
              onDrop={() => hanleDrop(index)}
              
            >
              {
                divContents[index] 
                &&
                <Castle />
              }
            </div>
          ))
        
        }
      </div>


  	</div> 

	)
}
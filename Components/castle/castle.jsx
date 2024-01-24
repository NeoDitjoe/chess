import style from './castle.module.css'

export default function Castle(){

  function handleDragStart(item){
		setDivContents((prevContents) => {
      const newContents = [...prevContents]
      // newContents[item] = null
      setDraggedIn(item)
      return newContents
    })
	}

  return(
    <div 
    draggable
    // onDragStart={() => handleDragStart()}
    className={style.castle} 
  >
    castle
  </div>
  )
}
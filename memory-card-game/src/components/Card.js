import React from 'react'
import './Card.css'
export default function Card({card,handleChoice,flip,disable}) {
  
  const handleSelect = () => {
    if(!disable){
      handleChoice(card)
    }
  }  
  return (
    <div className={`card ${flip?"flipped":""}`}>
        <img 
          width="200rem" 
          src={card.src} 
          alt="card front" 
          className="card-front"
        />
        <img 
          width="200rem" 
          src="../images/cover.png" 
          alt="card back" 
          onClick={handleSelect} 
          className="card-back" 
        />
    </div>
  )
}

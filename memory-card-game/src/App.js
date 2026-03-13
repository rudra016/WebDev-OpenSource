import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

const cardImages = [
  {"src":"./images/F-1.png", match: false},
  {"src":"./images/F-2.png", match: false},
  {"src":"./images/W-1.png", match: false},
  {"src":"./images/W-2.png", match: false},
  {"src":"./images/G-1.png", match: false},
  {"src":"./images/G-2.png", match: false},
]

function App() {
  const [card, setCard] = useState([]);
  const [turn, setTurn] = useState(0);
  const [choiceOne,setChoiceOne] = useState(null);
  const [choiceTwo,setChoiceTwo] = useState(null);
  const [win, setWin] = useState(false);
  const [disabled, setDisabled] = useState(false);
  
  const shuffleImg = () =>{
    const shuffledImg = [...cardImages,...cardImages] // spreads two card images object arrays
      .sort(() => Math.random() - 0.5) // randomly sorts the card image objects
      .map((card) => ({ ...card,id: Math.random()}))
  
    setCard(shuffledImg)
    setTurn(0)
  }
  const handleChoice = (chosenCard) => {
    choiceOne? setChoiceTwo(chosenCard) : setChoiceOne(chosenCard)
  }
  // comparing cards
  useEffect(() => {
    if(choiceOne && choiceTwo){
      setDisabled(true)
      if(choiceOne.src === choiceTwo.src){
        //fetching previous values of the card
        setCard(prevCard => {
          //mapping over each card in the prevCard array
          return prevCard.map(iterCard => {
            //if the iterated card source matches the choice
            if(iterCard.src === choiceOne.src){
              //set match to be true and return the updated array
              return {...iterCard, match: true}
            }
            else{
              return iterCard
            }
          })
        })
        //reset if match
        resetTurn()
      }
      else{
        //reset if not match
        setTimeout(() => {
          resetTurn()
        }, 1000);
      }
    }
  },[choiceOne,choiceTwo,card]);

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurn((prevTurn) => prevTurn+1)
    setDisabled(false)
  }
  useEffect(() => {   
    if(card.length !== 0){
      let winStatus = card.every(card => card.match)
      setWin(winStatus)
    }
  },[setWin,card])

  return (
    <div className="App">
      <h1>Card Matcheroo</h1>
      {turn !==0 && <h3>{`Turn: ${turn}`}</h3>}
      {win && <h1 style={{color: "greenyellow"}}>Winner</h1>}
      <button onClick={shuffleImg}>New Game</button>
      <div className="card-grid">
        {card.map(card => (
          <Card 
            key={card.id} 
            card={card} 
            handleChoice={handleChoice}
            flip = {card === choiceOne || card === choiceTwo || card.match}
            disable = {disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

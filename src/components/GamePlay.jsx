import React, { useState } from "react";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";


const GamePlay = () => {
    const [score,setScore] = useState(0)
    const [currentDice,setCurrentDice] = useState(1);
    const [selectedNumber,setSelectedNumber] = useState()

    const randomNumber = (min,max) => {
        console.log(Math.floor(Math.random() * (max-min) + min));
        return Math.floor(Math.random() * (max-min) + min);
    }

    const roleDice = () => {
        const random = randomNumber(1,7);
        
        if(!selectedNumber) return
        setCurrentDice(random)
        if(selectedNumber== random){
            setScore(prev=> prev + random)
        }else{
            setScore(prev=> prev-1)
        }
        setSelectedNumber(undefined)
    }
    
  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      <RoleDice currentDice={currentDice} roleDice= {roleDice}></RoleDice>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
  }
`;

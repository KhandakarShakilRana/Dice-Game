import React, { useState } from 'react'
import styled from 'styled-components'

const RoleDice = ({
    currentDice,roleDice
}) => {
    
    
  return (
    <DiceContainer>
        <div className='dice'
        onClick={roleDice}
        >
            <img src={
                `/public/dice_${currentDice}.png`
            } alt="" />
        </div>
        <p>Click on Dice to Roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
    display: flex;
    margin: 48px;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    .dice{
        cursor: pointer;
    }
`
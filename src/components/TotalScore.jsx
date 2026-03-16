import React from 'react'
import styled from 'styled-components'



const TotalScore = () => {
  return (
    <div>
        <ScoreContainer>
            <h1>0</h1>
            <p>Total Score</p>
        </ScoreContainer>
    </div>
  )
}

export default TotalScore

const ScoreContainer = styled.div`
max-width:200px;
background-color: red;
    h1{
        font-size: 100px;
        line-height: 100px;
        text-align: center;
        
    }
    p{
        font-size: 24px;
        font-weight: 500;
        text-align: center;
    }
`
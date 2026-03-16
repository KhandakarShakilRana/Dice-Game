import React from 'react'
import styled from 'styled-components'

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
            <img src="/dices.png" alt="" />
        </div>
        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    width: 1180px;
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    .content{
        text-align: right;
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }

`

const Button = styled.button`
    padding: 10px 18px;
    background: #000;
    border-radius: 5px;
    color: white;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.3s background ease-in;
    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }
`
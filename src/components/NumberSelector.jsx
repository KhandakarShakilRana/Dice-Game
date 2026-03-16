import React, { useState } from 'react'
import styled from 'styled-components'


const NumberSelector = ({
    selectedNumber,setSelectedNumber
}) => {
    const arrNumber = [1,2,3,4,5,6]
    
    console.log(selectedNumber);
  return (
    <>
    <NumberSelected>
        <div className='flex'>
            {
        arrNumber.map((value,i)=>{
           return <Box isSelected={value===selectedNumber} key={i} onClick={()=>
            setSelectedNumber(value)
           }>{value}</Box>
        })
    }
        </div>
        <p>Select Number</p>
    </NumberSelected>
    </>
  )
}

export default NumberSelector

const NumberSelected = styled.div`
display: flex;
flex-direction: column;
align-items: end;
gap: 24px;
.flex{
    display: flex;
    gap: 24px;
}
p{
    font-size: 24px;
    font-weight: 700;
}

`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    border-radius: 12px;
    background-color: ${(props)=> props.isSelected ? "black" : "white"};
    color: ${(props)=> props.isSelected ? "white" : "black"}
`
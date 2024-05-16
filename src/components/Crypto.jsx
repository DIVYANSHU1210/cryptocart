import React from 'react'
import Quantity from './Quantity'
import AddBtn from './AddBtn'

function Crypto({name, price, value, setValueFunc, clickFunc}) {
  return (
    <div>
        <div style={{backgroundColor:'yellow', padding:"1rem"}}>
            <h3>{name}</h3>
            <p>${price}</p>
        </div>
        <Quantity value={value} setValueFunc={setValueFunc}></Quantity>
        <AddBtn clickFunc={clickFunc}/>
    </div>

  )
}

export default Crypto
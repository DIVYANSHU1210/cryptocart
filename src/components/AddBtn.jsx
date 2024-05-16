import React from 'react'

function AddBtn({clickFunc}) {
  return (
    <button onClick={()=>clickFunc()}>Add</button>
  )
}

export default AddBtn
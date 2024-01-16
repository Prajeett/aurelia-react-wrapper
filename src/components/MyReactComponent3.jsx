import React from 'react'

const MyReactComponent3 = () => {
    const handler = () => {
        alert("works")
    }
  return (
    <div>
        <button onClick={handler}>This button is the child component of the above 2nd component</button>
        
    </div>
  )
}

export default MyReactComponent3;
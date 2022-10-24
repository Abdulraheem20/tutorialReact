import React, { useEffect, useState } from 'react'

const AddUppBtnn = () => {
    const [initial, setInitial] = useState(0);

    useEffect(()=>{
        document.title = `${initial} times`
    })

  return (
    <div>
        <div>
        <h1>{initial}</h1>
        <button onClick={()=>{
        setInitial(initial + 1)
        }}>Click Me!</button>
        </div>

    </div>
  )
}

export default AddUppBtnn
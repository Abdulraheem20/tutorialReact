import React, { useEffect, useState } from 'react'

const RandNumb = () => {
    const [randNum, setRandNum] = useState([])
    const [count, setCount] = useState(0)

    useEffect(()=>{
        const getNum = function () {
            return setRandNum(Math.floor(Math.random() * 100)+ 1)
        }
        // console.log(randNum)
        getNum()
    }, [])
  return (
    <div>
        <div>
            <h1>{count}:  {randNum}</h1>
        <button onClick={()=>{
             setCount(count + 1)
            //  setRandNum(Math.floor(Math.random() * 100)+ 1)
             console.log(``)
             randNum.map(itr=>
                // {console.log(`${itr.count}: ${itr.setRandNum} `)},
                <p>{itr.count}: <span>{itr.setRandNum}</span></p>
            )
        }
        }>Click me </button>
        </div> 
    </div>
  )
}

export default RandNumb

/* 

.map(itr=>(
            <p>{count}:  <span>{itr.setRandNum}</span></p>
        ))


        React.createElement(
                'h1',
                {className: 'greeting'},
                `${count}:  ${randNum}`
              );
*/
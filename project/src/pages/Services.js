import React from 'react'
import '../component/styles/Service.css'
import Whatwedo from '../component/Whatwedo'
import servicelist from '../component/serviceList'


const DisplayService =(itr, id)=>{
    return <Whatwedo
    id={id}
    key={itr.img}
    img={itr.img}
    title={itr.title}
    skills={itr.skills}
    />
}

const Services = () => {
  return (
    <div className='serviceWrap'>
      <div className="services">
        <h1>What we do</h1>
        {servicelist.map(DisplayService)}
        </div>  
    </div>
  )
}

export default Services
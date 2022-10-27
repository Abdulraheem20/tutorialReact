import React from 'react'
import { useNavigate } from 'react-router-dom'

const Whatwedo = ({title, skills, img, desc, id}) => {
    const navigate = useNavigate()
  return (
    <div className="frontEnd" onClick={()=>{
        navigate('/services/' + id)
    }}>
            <img src={img} alt="image" />
            <h3>{title}</h3>
            <h4>{skills}</h4>
            <p>{desc}</p>
        </div>
  )
}

export default Whatwedo
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../component/Button'
import servicelist from '../component/serviceList'
import '../component/styles/Showservice.css'

const ShowServices = () => {
    const {id} = useParams()
    const list = servicelist[id]
    const navigate = useNavigate()
  return (
    <div>
        <div className="dis">
            <img src={list.img} alt="" />
            <div className="details">
                <h3>{list.title}</h3>
                <h4>{list.skills}</h4>
                <p>{list.description}</p>
            </div>
            <Button className='Prev-btn' name="Previos Page" onClick={()=>navigate(-1)} />
        </div>
    </div>
  )
}

export default ShowServices
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './styles/Hookapi.css'

const HookApi = () => {
    const [apiData, setApiData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        const getData = async ()=>{
            try{
                let url = 'https://randomuser.me/api/?results=20'
            const Users = await axios.get(url)
            console.log(Users.data.results)
            setApiData(Users.data.results)
            setLoading(false)
            }catch(err){
                console.log(err)
            }
        }
        getData()
        // axios.get(url)
        // .then((res)=>{
        //     setApiData(res.data.results)
        //     console.log(res.data.results)
        //     setLoading(false)
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })
    }, [])
//     const showData = (itr)=>{
//       return  <div className="wrap" key={itr.email}> 
//       <div className="img">
//           <img src={itr.picture.large} alt="" />
//       </div>
//       <div className="text">
//           <h3>{itr.name.title} {itr.name.first} {itr.name.last}</h3>
//           <h3>{itr.email}</h3>
//           <p>{itr.location.city}  </p>
//           <p></p>
//           <p></p>
//       </div>
//   </div> 
//     }
  return (
    <div>
        <div className="api-wrapper">
            {/* {apiData.map(showData)} */}
            {loading? 'loading...': apiData.map(itr=>(
                <div className="wrap" key={itr.email}> 
                <div className="img">
                    <img src={itr.picture.large} alt="" />
                </div>
                <div className="text">
                    <h3>{itr.name.title} {itr.name.first} {itr.name.last}</h3>
                    <h3>{itr.email}</h3>
                    <p>{itr.location.city}  </p>
                    <p></p>
                    <p></p>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default HookApi
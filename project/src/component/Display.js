import React from 'react';
import GudAftn from './GudAftn';
import GudEvn from './GudEvn';
import GudMrn from './GudMrn';

const time = new Date().getHours()
const displayMsg = ()=>{
    let message;
    if (time < 12) {
        message = <GudMrn/>
    } else if (time >= 12 && time <= 16){
        message = <GudAftn/>
    } else if (time > 16 && time <= 24){
        message = <GudEvn/>
    }
    return message
}
const Display = () => {
  return (
    <div>
        {displayMsg()}
    </div>
  )
}

export default Display
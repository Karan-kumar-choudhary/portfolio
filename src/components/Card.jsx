import React from 'react'

const Card = ({photo, h1,p}) => {
  return (
    <div >
       <img className=' custom-img' src={photo} alt="" />
       <h1 className='heading-textr'>{h1}</h1>
       <p className=''>{p}</p>
    </div>
  )
}

export default Card
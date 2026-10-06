import React from 'react'

const Projectitems = ({photo,h1,p}) => {
  return (
    <>
      <div >
       <img className=' card-img' src={photo} alt="" />
       <h1 className='header-text'>{h1}</h1>
       <p className=''>{p}</p>
    </div>
    </>
    
  )
}

export default Projectitems
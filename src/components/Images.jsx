import React from 'react'

const Images = ({url}) => {
  return (
    <div className="heroimage">
        <img src={url} alt="" />
    </div>
  )
}

export default Images
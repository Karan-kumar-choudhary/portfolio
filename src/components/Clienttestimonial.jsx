import React from 'react'

const Clienttestimonial = ({photo,h3,p}) => {
  return (
<>
     
     <div className='clients p-[42px] bg-red-300 w-[390px] border-2'>
       <p className=''>{p}</p>
       <div className='flex items-center bottom-section pt-[60px]'>
        <div className="left px-[16px] ">
          <img className=''   src={photo} alt="" />
        </div>
        <div className="right">
        <div className='group-stars flex gap-1'>
 <i class="fa-jelly-fill fa-regular fa-star"></i>
  <i class="fa-jelly-fill fa-regular fa-star"></i>
   <i class="fa-jelly-fill fa-regular fa-star"></i>
    <i class="fa-jelly-fill fa-regular fa-star"></i>
     <i class="fa-jelly-fill fa-regular fa-star"></i>
        </div>
       <h3 className=''>{h3}</h3>
       <p className=''> Google</p>
        </div>
       </div>
       
      



     </div>

    
</>
  )
}

export default Clienttestimonial
// i={}
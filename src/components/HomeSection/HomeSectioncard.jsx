import React from 'react'

function HomeSectioncard() {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>

    <div className='h-[13rem] w-[10rem]'>
    <img className='object-cover object-top w-full h-full' src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR7s2rocQc6HVJ8nEBNQjj_ypRMvP3TFt3OlNYwUXzhF7kdfd4hbVhie56BXMgoyPjNN3hLlVZLt2eiQqrVECAsP7Qb8ZmNPrOKHTaGqm0&usqp=CAE" alt="" />

    </div>
    <div className='p-4'>
     <h3 className='text-lg font-medium text-gray-900'>NoFilter</h3>
     <p className='mt-2 text-sm text-gray-500'>	
Anouk Men Grey & White Floral Printed Pure Cotton</p>
    </div> 
      
    </div>
  )
}

export default HomeSectioncard

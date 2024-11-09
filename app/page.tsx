
import React from 'react'
import Image from 'next/image'





const Homepage = () => {
  return (
    <div className='h-screen'>
      <div className='flex h-[80%'>
        <div className='w-1/2 flex flex-col justify-center items-start m-12'>
        
        <h1 className='max-w-[496px]  font-bold text-[35px]'>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>

        
        <p className='max-w-full md:max-w[902px] text-[20px] text-[#787054] text-left font-medium h-[120px]'>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our
 desirable collection.</p>
 <button className=' bg-[#A29875] w-[180px] font-medium text-[20px] h-[38px] text-white rounded-[10px] left-5'>Explore Now</button>
</div>
      <div className='w-1/2 flex justify-center items-center mt-[35px]'  >
      
       <Image 
        src={"/image/head.png"}
        alt="head.icon"
        width={250}
        height={550}
        className='max-w-full h-auto' 
        
        />
          
      

        
      </div>
      </div>
    
      
    </div>
  )
}

export default Homepage

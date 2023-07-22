import React from 'react'

const Resume = ({handleResume}) => {
  return (
    <div className='box w-[300px] h-[350px] flex flex-col items-center justify-center gap-5'>
      <p className=' font-extrabold text-yellow-50'>End Of slide...</p>
          <button onClick={handleResume} className='border-2 rounded-lg px-5 py-2 bg-slate-100 hov'>Resume</button>
    </div>
  )
}

export default Resume

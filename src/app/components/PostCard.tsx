import { useRouter } from 'next/navigation'
import React from 'react'

export default function PostCard() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/posting/1')} 
      className="p-3 bg-white border border-slate-300 rounded h-auto hover:bg-slate-50"
    >
      <div className="flex gap-x-3">
        <div>
          <div className="w-[45px] h-[45px] overflow-hidden rounded-full bg-slate-400 border border-slate-400"></div>
        </div>
        <div className="flex flex-col gap-y-1 justify-start text-left">
          <h3 className="font-bold text-primary leading-tight">The Service Title Goes Here</h3>  
          <h3 className="font-semibold text-slate-500">Company Name</h3>  
          <p className="text-[0.92em]">$45 - $50</p>  
          <p className="text-[0.92em]">Houston, Texas</p>  
          <p className="text-[0.92em]">Posted 2 months ago</p> 
          <div className="flex gap-2">
            <p className="text-[0.8em] rounded bg-slate-500 text-white font-semibold px-2 py-1">Full Time</p>
            <p className="text-[0.8em] rounded bg-slate-500 text-white font-semibold px-2 py-1">On-Site</p>
          </div> 
        </div>
      </div>  
    </button>
  )
}

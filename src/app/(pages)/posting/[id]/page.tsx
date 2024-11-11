'use client'
import PostCard from '@/app/components/PostCard';
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Posting() {
  const router = useRouter();

  return (
    <div className="min-h-[80vh] flex justify-center bg-slate-50">
      <div className="2xl:w-[1200px] xl:w-[1200px] w-auto min-h-[200px] flex 2xl:flex-row xl:flex-row flex-col gap-5 p-5">
        <main className="2xl:p-5 xl:p-5 p-2 h-auto flex-1 border border-slate-300 rounded bg-white">
          <div className="rounded border border-slate-300 2xl:p-5 xl:p-5 p-2 bg-slate-100 mb-5 flex justify-between items-center">
            <h5 className="font-bold 2xl:text-xl xl:text-xl text-base text-primary">Job Posting</h5>
            <button
              onClick={() => router.back()} 
              className="p-2 border border-slate-300 rounded font-bold bg-white 2xl:text-base xl:text-base text-sm"
            >
              Go Back
            </button>
          </div>
          <div className="">
            <h6 className="2xl:text-3xl xl:text-3xl text-lg">Name of Service Posting</h6>
          </div>
          <div className="h-[1px] bg-slate-300 2xl:my-5 xl:my-5 my-3" />
          <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-5 2xl:mb-5 xl:mb-5 mb-3">
            <div>
              <h6 className="font-bold text-lg 2xl:mb-1 xl:mb-1 mb-0 text-primary">title</h6>
              <p>Lorem, ipsum dolor sit amet .</p>    
            </div>
            <div>
              <h6 className="font-bold text-lg 2xl:mb-1 xl:mb-1 mb-0 text-primary">title</h6>
              <p>Lorem, ipsum dolor sit amet .</p>    
            </div>
            <div>
              <h6 className="font-bold text-lg 2xl:mb-1 xl:mb-1 mb-0 text-primary">title</h6>
              <p>Lorem, ipsum dolor sit amet .</p>    
            </div>
            <div>
              <h6 className="font-bold text-lg 2xl:mb-1 xl:mb-1 mb-0 text-primary">title</h6>
              <p>Lorem, ipsum dolor sit amet .</p>    
            </div>
            <div>
              <h6 className="font-bold text-lg 2xl:mb-1 xl:mb-1 mb-0 text-primary">title</h6>
              <p>Lorem, ipsum dolor sit amet .</p>    
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
              <h6 className="font-bold text-lg 2xl:mb-1 xl:mb-1 mb-0 text-primary">title</h6>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptatem quod autem officiis aliquid repellat dicta corrupti vitae odio nisi.</p>    
            </div>
            <div>
              <h6 className="font-bold text-lg 2xl:mb-1 xl:mb-1 mb-0 text-primary">title</h6>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptatem quod autem officiis aliquid repellat dicta corrupti vitae odio nisi.</p>    
            </div>
            <div>
              <h6 className="font-bold text-lg 2xl:mb-1 xl:mb-1 mb-0 text-primary">title</h6>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptatem quod autem officiis aliquid repellat dicta corrupti vitae odio nisi.</p>    
            </div>
            <div>
              <h6 className="font-bold text-lg 2xl:mb-1 xl:mb-1 mb-0 text-primary">title</h6>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptatem quod autem officiis aliquid repellat dicta corrupti vitae odio nisi.</p>    
            </div>
          </div>

          <div>
            <div className="h-[1px] bg-slate-200 my-5" />
            <div className="flex 2xl:flex-row xl:flex-row flex-col 2xl:justify-end xl:justify-end 2xl:gap-3 xl:gap-3 gap-2">
              <button className="rounded 2xl:p-2 xl:p-2 p-1 border border-slate-300 text-slate-400 bg-white 2xl:w-[100px] xl:w-[100px] w-full">Edit</button>    
              <button className="rounded 2xl:p-2 xl:p-2 p-1 border border-red-500 text-white bg-red-500 2xl:w-[100px] xl:w-[100px] w-full">Delete</button>    
            </div>
          </div>

        </main>
        <div className="w-[300px]">
          <div className="2xl:p-5 xl:p-5 p-2 h-auto w-full border border-slate-300 rounded bg-white">
            <div>
              <h6 className="text-lg font-semibold">Similar postings</h6>
            </div>
            <div className="2xl:my-5 xl:my-5 my-2 bg-slate-300 h-[1px]" />
            <div className="flex flex-col gap-y-3">
              <PostCard />
              <PostCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

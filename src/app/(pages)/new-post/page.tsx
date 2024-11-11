'use client'
import { useRouter } from 'next/navigation'
import React from 'react'


export default function NewPost() {
  const router = useRouter();

  return (
    <div className="min-h-[80vh] flex justify-center  bg-slate-50">
      <div className="h-auto w-full">
        <div className="h-auto w-full flex justify-center">
          <div className="2xl:w-[1200px] xl:w-[1200px] w-screen h-full 2xl:p-[0px] xl:p-[0px] p-2">
            <div className="flex justify-between items-center">
              <h3 className="2xl:text-3xl xl:text-3xl text-xl py-5">Add Job Posting</h3>
              <button
                onClick={() => router.back()}
                className="p-2 border border-slate-300 rounded font-bold bg-white 2xl:text-base xl:text-base text-sm"
              >
                Go Back
              </button>  
            </div>
            <div className="h-[1px] w-full bg-slate-400 mb-5" />
            <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-5">
              <div>
                <h4 className="mb-1 font-bold text-primary">Title</h4>
                <input placeholder="Title" className="border border-slate-400 rounded w-full h-[2.5em] px-3" />
              </div>
              <div>
                <h4 className="mb-1 font-bold text-primary">Title</h4>
                <input placeholder="Title" className="border border-slate-400 rounded w-full h-[2.5em] px-3" />
              </div>
              <div>
                <h4 className="mb-1 font-bold text-primary">Title</h4>
                <input placeholder="Title" className="border border-slate-400 rounded w-full h-[2.5em] px-3" />
              </div>
              <div>
                <h4 className="mb-1 font-bold text-primary">Title</h4>
                <input placeholder="Title" className="border border-slate-400 rounded w-full h-[2.5em] px-3" />
              </div>
              <div>
                <h4 className="mb-1 font-bold text-primary">Title</h4>
                <input placeholder="Title" className="border border-slate-400 rounded w-full h-[2.5em] px-3" />
              </div>
            </div>
            <div className="py-5">
              <h4 className="mb-1 font-bold text-primary">Job Title</h4>  
              <div className="grid 2xl:flex xl:flex 2xl:flex-row xl:flex-row grid-cols-2 2xl:gap-x-20 xl:gap-x-20 gap-x-5">
                <div className="flex gap-x-2">
                  <input
                    type="checkbox"
                  />  
                  <h6 className="font-semibold text-slate-600">title</h6>  
                </div>  
                <div className="flex gap-x-2">
                  <input
                    type="checkbox"
                  />  
                  <h6 className="font-semibold text-slate-600">title</h6>  
                </div>  
                <div className="flex gap-x-2">
                  <input
                    type="checkbox"
                  />  
                  <h6 className="font-semibold text-slate-600">title</h6>  
                </div>  
                <div className="flex gap-x-2">
                  <input
                    type="checkbox"
                  />  
                  <h6 className="font-semibold text-slate-600">title</h6>  
                </div>  
              </div>
            </div>
            <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-5">
              <div>
                <h4 className="mb-1 font-bold text-primary">Title</h4>
                <textarea
                  placeholder="Title"
                  className="p-3 rounded border border-slate-400 w-full h-[120px]"
                />
              </div>    
              <div>
                <h4 className="mb-1 font-bold text-primary">Title</h4>
                <textarea
                  placeholder="Title"
                  className="p-3 rounded border border-slate-400 w-full h-[120px]"
                />
              </div>    
              <div>
                <h4 className="mb-1 font-bold text-primary">Title</h4>
                <textarea
                  placeholder="Title"
                  className="p-3 rounded border border-slate-400 w-full h-[120px]"
                />
              </div>    
            </div>
            <div className="my-5">
              <button className="font-bold text-white py-2 px-5 rounded bg-primary">
                Submit
              </button>    
            </div>
          </div>  
        </div>  
      </div>  
    </div>  
  )
}

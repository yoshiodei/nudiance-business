'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function EditProfile() {
  const router = useRouter();

  return (
    <div className="min-h-[80vh] flex justify-center  bg-slate-50">
      <div className="h-auto w-full">
        <div className="h-auto w-full flex justify-center">
          <div className="2xl:w-[1200px] xl:w-[1200px] w-screen h-full">
            <div className="w-full p-2">
                <div className="h-[80px] w-full border-b border-slate-300 mb-5 flex justify-between items-center">
                  <h3 className="text-2xl text-left text-slate-600">Edit Profile Details</h3>
                  <button
                    onClick={() => router.back()} 
                    className="p-2 border border-slate-300 rounded font-bold bg-white 2xl:text-base xl:text-base text-sm"
                  >
                    Go Back
                  </button>    
                </div>
                <div className="flex 2xl:flex-row xl:flex-row flex-col 2xl:justify-start xl:justify-start justify-center 2xl:items-end xl:items-end items-center 2xl:gap-5 xl:gap-5 gap-3 mb-5">
                  <div className="border-2 p-1 border-slate-300 rounded border-dashed w-[180px] h-[180px]">
                    <div className="bg-slate-300 rounded h-full w-full" />
                  </div> 
                  <button className="rounded flex justify-center items-center bg-slate-400 h-[2.5em] px-3">
                    <h4 className="text-white font-semibold">Change Image</h4>
                  </button> 
                </div>
                <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1  2xl:gap-5 xl:gap-5 gap-3">
                  <div>
                    <label className="font-bold mb-3 text-primary 2xl:text-base xl:text-base text-[0.9em]">Company Name</label>
                    <input
                      className="h-[2.3em] w-full border border-slate-300 rounded bg-white px-5"
                      placeholder="Please enter company name"
                    />
                  </div>
                  <div>
                    <label className="font-bold mb-3 text-primary 2xl:text-base xl:text-base text-[0.9em]">Type of Business</label>
                    <input
                      className="h-[2.3em] w-full border border-slate-300 rounded bg-white px-5"
                      placeholder="Please enter business type"
                    />
                  </div>
                  <div>
                    <label className="font-bold mb-3 text-primary 2xl:text-base xl:text-base text-[0.9em]">Number of Employees</label>
                    <input
                      className="h-[2.3em] w-full border border-slate-300 rounded bg-white px-5"
                      placeholder="Please enter employee number"
                    />
                  </div>
                </div>
                <div className="my-5 flex 2xl:justify-start xl:justify-start justify-center">
                  <button className="rounded flex justify-center items-center bg-primary h-[2.5em] px-3">
                    <h4 className="text-white font-semibold">Update Profile</h4>
                  </button> 
                </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

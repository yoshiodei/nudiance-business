'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Login() {
  const router = useRouter();

  return (
    <div className="min-h-[80vh]">
      <div className="flex justify-center">
        <div className="2xl:bg-slate-50 xl:bg-slate-50 2xl:border xl:border border-slate-300 rounded-lg w-[500px] p-5 mt-20">
          <h3 className="text-center text-2xl font-bold 2xl:mb-5 xl:mb-5 mb-1 text-primary">Login</h3>
          <div className="2xl:hidden xl:hidden flex justify-center">
            <div className="w-[50px] mb-5 h-[2px] bg-primary" />
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
                <label className="font-bold mb-3 text-primary 2xl:text-base xl:text-base text-[0.9em]">Email</label>
                <input
                  className="h-[2.3em] w-full border border-slate-300 rounded bg-white px-5"
                  placeholder="Please enter email"
                />
            </div>
            <div>
                <label className="font-bold mb-3 text-primary 2xl:text-base xl:text-base text-[0.9em]">Password</label>
                <input
                  className="h-[2.3em] w-full border border-slate-300 rounded bg-white px-5"
                  placeholder="Please enter password"
                />
            </div>
            <div>
              <div className="flex justify-center mb-2">  
                <button 
                  className="h-[2.3em] w-full rounded bg-primary text-white font-bold"
                  onClick={() => router.push('/home') }
                >
                  Login
                </button>
              </div>
              <div className="flex justify-center">
                <h6 className="2xl:text-base xl:text-base text-[0.9em]">
                  Don&apos;t have an account? <button onClick={() => router.push('/Signup') } className="hover:underline text-blue-400 text-primary font-semibold">Sign Up</button>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

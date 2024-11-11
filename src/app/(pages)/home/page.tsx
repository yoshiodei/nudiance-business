'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import { FaEdit } from "react-icons/fa"
import React from 'react'
import PostCard from '@/app/components/PostCard';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-[80vh] flex justify-center  bg-slate-50">
      <div className="h-auto w-full">
        <div className="h-auto w-full flex justify-center">
          <div className="2xl:w-[1200px] xl:w-[1200px] w-auto h-full">
            <div className="w-full 2xl:h-[380px] xl:h-[380px] h-[250px] bg-slate-300 2xl:mb-5 xl:mb-5 relative">
              <Image 
                className="w-full h-full object-cover"
                width={1500}
                height={800}
                src="/images/nudiance_bg.jpg"
                alt="Nudiance background"
              />
              <button className="top-[10px] right-[10px] w-[35px] h-[35px] rounded-full absolute z-10 bg-slate-200 border border-slate-400 flex justify-center items-center">
                <FaEdit className="font-[1.2em] text-slate-400" />
              </button>
            </div>
            <div className="w-full 2xl:h-[150px] xl:h-[150px] h-auto bg-white relative rounded border 2xl:border-slate-200 xl:border-slate-200 border-white">
              <div className="2xl:ms-[240px] xl:ms-[240px] 2xl:mt-[0px] xl:mt-[0px] mt-[50px] h-full flex 2xl:flex-row xl:flex-row flex-col justify-between p-5">
                <div>
                  <h6 className="text-2xl font-bold 2xl:text-left xl:text-left text-center">Company Name</h6>
                  <h6 className="text-lg font-bold 2xl:text-left xl:text-left text-center">Employees</h6>
                </div>
                <div className="2xl:block xl:block flex justify-center">
                  <button
                    onClick={() => router.push('/edit-profile')}
                    className="py-1 px-4 rounded font-semibold bg-gray-200 text-slate-500 2xl:mt-[0px] xl:mt-[0px] mt-[15px]"
                  >
                    Edit Profile
                  </button>
                </div>
              </div>  
              <div className="absolute 2xl:h-[200px] xl:h-[200px] h-[120px] 2xl:w-[200px] xl:w-[200px] w-[120px] rounded bg-white border-4 border-white 2xl:bottom-[20px] xl:bottom-[20px] 2xl:left-[20px] xl:left-[20px] left-1/2 2xl:top-[unset] xl:top-[unset] top-[-60px] 2xl:transform-none xl:transform-none transform -translate-x-1/2 overflow-hidden">
                <Image 
                  className="w-full h-full object-cover"
                  width={1500}
                  height={800}
                  src="/images/nudiance_profile_logo2.jpg"
                  alt="Nudiance background"
                />
              </div>    
            </div>
          </div>        
        </div>
        <div className="h-auto w-full flex justify-center mt-[30px] mb-8">
          <div className="2xl:w-[1200px] xl:w-[1200px] w-auto h-full bg-blue-100">
            <div className="bg-white 2xl:rounded xl:rounded rounded-none border 2xl:border-slate-200 xl:border-slate-200 border-white h-full p-5">

              <div className="2xl:max-w-full xl:max-w-full max-w-[280px] overflow-auto scrollbar-hide">
                <div className="flex gap-x-5">
                  <button className="p-2 rounded hover:bg-slate-100 hover:text-primary w-[150px] text-nowrap bg-slate-50">
                    <h5 className="font-bold text-slate-500">My Job Postings</h5>
                  </button>
                  <button className="p-2 rounded hover:bg-slate-100 w-[150px] text-nowrap bg-slate-50">
                    <h5 className="font-bold text-slate-500">All Job Posting</h5>
                  </button>
                  <button className="p-2 rounded hover:bg-slate-100 w-[120px] text-nowrap bg-slate-50">
                    <h5 className="font-bold text-slate-500">Analytics</h5>
                  </button>
                </div>
              </div>

              <div className="h-[1px] w-full bg-slate-400 my-4" />
              <div>
                <div className="mb-5 flex justify-center">
                  <div className="flex 2xl:flex-row xl:flex-row flex-col 2xl:w-[700px] xl:w-[700px] w-full gap-3 h-auto">
                    <input 
                      className="h-[2.4em] 2xl:px-5 xl:px-5 px-3 2xl:flex-1 xl:flex-1 rounded border border-slate-300"
                      placeholder="Search Post"
                    />
                    <button 
                      onClick={() => router.push('/new-post')}
                      className="h-[2.4em] rounded 2xl:w-[120px] xl:w-[120px] w-full bg-primary text-white font-bold"
                    >
                      + New Post
                    </button>
                  </div>
                </div>
                <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 grid-cols-1 gap-3">
                  <PostCard />
                  <PostCard />
                  <PostCard />
                  <PostCard />
                  <PostCard />
                  <PostCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
// import { FaEdit } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import ProtectedRoute from '@/app/shared/hoc/withProtectedRoute';
import { ICompanyDataPayload } from '@/app/shared/utils/types';
import LogoutModal from '@/app/(auth)/components/logoutModal';

import TabContainer from './components/TabContainer';

export default function Home() {

  const initialState = {
    password: '',
    size: '',
    uid: '',
    name: '',
    jobListing: [],
    email: '',
    image: '',
    wallpaper: '',
  }
  
  const [companyData, setCompanyData] = useState<ICompanyDataPayload>(initialState);
  const [tab, setTab] = useState<string>('all-post');

  const router = useRouter();

  const { company } = useSelector((state: RootState) => state.company);
  console.log('companyInfo', company);
  console.log('companyData', companyData);
  
  useEffect(() => {
    setCompanyData(company);
  }, []);

  return (
    <ProtectedRoute>
    <div>  
    <div className="min-h-[80vh] flex justify-center  bg-slate-50">
      <div className="h-auto w-full">
        <div className="h-auto w-full flex justify-center">
          <div className="2xl:w-[1200px] xl:w-[1200px] w-auto h-full">
            <div className="w-full 2xl:h-[380px] xl:h-[380px] h-[250px] bg-slate-300 2xl:mb-5 xl:mb-5 relative">
              <Image 
                className="w-full h-full object-cover"
                width={1500}
                height={800}
                src={companyData?.wallpaper || "/images/nudiance_bg.jpg"}
                alt="Nudiance background"
              />
              {/* <button className="top-[10px] right-[10px] w-[35px] h-[35px] rounded-full absolute z-10 bg-slate-200 border border-slate-400 flex justify-center items-center">
                <FaEdit className="font-[1.2em] text-slate-400" />
              </button> */}
            </div>
            <div className="w-full 2xl:h-[150px] xl:h-[150px] h-auto bg-white relative rounded border 2xl:border-slate-200 xl:border-slate-200 border-white">
              <div className="2xl:ms-[240px] xl:ms-[240px] 2xl:mt-[0px] xl:mt-[0px] mt-[50px] h-full flex 2xl:flex-row xl:flex-row flex-col justify-between p-5">
                <div>
                  <h6 className="text-3xl font-bold 2xl:text-left xl:text-left text-center">{companyData.name}</h6>
                  <h6 className="text-[1.1em] font-bold 2xl:text-left xl:text-left text-center">{companyData.email}</h6>
                  <h6 className="text-lg font-bold 2xl:text-left xl:text-left text-center">{`Size: ${companyData.size} people`}</h6>
                </div>
                <div className="2xl:block xl:block flex flex-col items-center">
                  <button
                    onClick={() => router.push(`/edit-profile/${companyData.uid}`)}
                    className="py-1 px-4 rounded font-semibold bg-gray-200 text-slate-500 2xl:mt-[0px] xl:mt-[0px] mt-[15px]"
                  >
                    Edit Profile
                  </button>
                  <LogoutModal />
                </div>
              </div>  
              <div className="absolute 2xl:h-[200px] xl:h-[200px] h-[120px] 2xl:w-[200px] xl:w-[200px] w-[120px] rounded bg-white border-4 border-white 2xl:bottom-[20px] xl:bottom-[20px] 2xl:left-[20px] xl:left-[20px] left-1/2 2xl:top-[unset] xl:top-[unset] top-[-60px] 2xl:transform-none xl:transform-none transform -translate-x-1/2 overflow-hidden">
                <Image 
                  className="w-full h-full object-cover"
                  width={1500}
                  height={800}
                  src={companyData?.image || "/images/nudiance_profile_logo2.jpg"}
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
                  <button 
                    onClick={() => setTab('all-post')}
                    className={`p-2 rounded hover:bg-primary hover:text-white ${tab === 'all-post' ? 'bg-primary text-white' : 'text-slate-500 bg-slate-50'} w-[150px] text-nowrap transition-all`}
                  >
                    <h5 className="font-bold transition-all">Job Postings</h5>
                  </button>
                  <button
                    onClick={() => setTab('active-post')}
                    className={`p-2 rounded hover:bg-primary hover:text-white ${tab === 'active-post' ? 'bg-primary text-white' : 'text-slate-500 bg-slate-50'} w-[150px] text-nowrap transition-all`}
                  >
                    <h5 className="font-bold transition-all">Active Posts</h5>
                  </button>
                  <button
                    onClick={() => setTab('inactive-post')}
                    className={`p-2 rounded hover:bg-primary hover:text-white ${tab === 'inactive-post' ? 'bg-primary text-white' : 'text-slate-500 bg-slate-50'} w-[150px] text-nowrap transition-all`}
                  >
                    <h5 className="font-bold transition-all">Inactive Posts</h5>
                  </button>
                </div>
              </div>

              <div className="h-[1px] w-full bg-slate-400 my-4" />

              <TabContainer tab={tab} />

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </ProtectedRoute>
  )
}

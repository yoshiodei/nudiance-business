'use client'
import React, {useEffect, useState} from 'react';
import { collection, getDocs } from "firebase/firestore";
import { showToast } from '@/app/shared/utils/showToast';
import { IJobPost } from '@/app/shared/utils/types';
import { FirebaseError } from "firebase/app";
import { db } from '@/firebase/firebase';
import PostCard from '@/app/components/PostCard';

export default function DisplaySimilarPostings({id}: {id: string}) {
    
  const [jobListData, setJobListData] = useState<IJobPost[]>([]);
  const [loading, setLoading] = useState(false);

  const getJobList = async () => {
      try{
          const querySnapshot = await getDocs(collection(db, "jobList"));
          const jobList:IJobPost[] = [];
          querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            const jodData = {
              id: '',
              name: doc.data().name,
              jMinEducation: doc.data().jMinEducation,
              jExpectation: doc.data().jExpectation,
              jDescription: doc.data().jDescription,
              jComBenefit: doc.data().jComBenefit,
              externalLink: doc.data().externalLink,
              companyEmail: doc.data().companyEmail,
              consultType: doc.data().consultType,
              postedFrom: doc.data().postedFrom,
              datePosted: doc.data().datePosted,
              lastEdited: doc.data().lastEdited,
              salary: doc.data().salary,
              status: doc.data().status,
              viewCount: doc.data().viewCount,
              jobType: doc.data().jobType,
              vendor: {
                Company: doc.data().vendor.Company,
                address: doc.data().vendor.address,
                uid: doc.data().vendor.uid,
              }
            };
            jobList.push({...jodData, id: doc.id});
          });

          const newJobList = jobList.filter((job) => {
            return job.id !== id;
          })

          setJobListData(newJobList.slice(0,5));
      }
      catch(err: unknown){
        if (err instanceof FirebaseError) {
          showToast((err.message || 'An error occurred while registering the user.'), 'error');
        } else if (err instanceof Error) {
          showToast(err.message, 'error');
        } else {
          showToast('An unknown error occurred.', 'error');
        }
      }
    }

    const loadSimilarJobs = async () => {
      setLoading(true);
      await getJobList();
      setLoading(false);
    }

    useEffect(() => {
      loadSimilarJobs();
    }, []);  

  if(loading){
    return (
      <div className="flex flex-col gap-y-3">
        <h5 className="text-slate-500 p-3 text-[1.2em]">...loading jobs</h5>
      </div>
    )
  }  

  if(!loading && jobListData.length === 0){
    return (
      <div className="flex flex-col gap-y-3">
        <h5 className="text-slate-500 p-3 text-[1.2em]">There are no other posts</h5>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-y-3">
      {
        jobListData.map((jobData) => (
          <PostCard key={jobData.id} jobData={jobData} />
        ))
      }
    </div>
  )
}

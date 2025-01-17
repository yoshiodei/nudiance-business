"use client"
import { useRouter } from "next/navigation";
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Home: React.FC = () => {
  const router = useRouter();
  const count = useSelector((state: RootState ) => state.counter.value);

  return (

    <div className="flex items-center justify-center h-[80vh] bg-background">
      <div>
        <h2 className="2xl:text-4xl xl:text-4xl text-xl text-slate-700 font-bold my-5 2xl:w-[45vw] xl:w-[45vw] w-full text-center">Log in to access personalized tools and resources tailored to your business needs.</h2>
        <h1>Count: {count}</h1>
        <div className="flex justify-center">
          <button
            onClick={() => router.push("/Login")} 
            className="bg-secondary rounded 2xl:py-2 xl:py-2 py-1 px-5 text-white font-semibold"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
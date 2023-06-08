import type { NextPage } from "next";
import { atom } from 'jotai'
'use client';
import { useRouter } from 'next/navigation';
import {useEffect} from 'react'
import Image from "next/image";
import {GoogleIcon, RightArrow} from '../icons.js'
import { signInWithGoogle, auth } from "@/firebaseConfig";
import { onAuthStateChanged, getAuth, signOut } from 'firebase/auth'

export const dataAtom = atom({
  "Received": [],
  "Assets": [],
  "Liabilities": [],
  "Expenses": []
})

const Home: NextPage = () => {  

  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, async(user) => {
      if(user) {
        // router.push('/dashboard');        
      }
    })

  }, [router])


  return (
    <>
      <div className="flex flex-col items-center my-auto h-screen justify-center p-4 gap-6">
        <Image
          src="/images/cover.svg"
          alt=" frontcover"
          width={270}
          height={270}
        />
        <h1 className="text-4xl leading-snug font-semibold text-center">
          Manage Your Finances like a Pro
        </h1>
        <div className="flex gap-5 font-medium pb-6 border-b-4">
          <span className="flex gap-1 items-center"> <RightArrow /> <>Liabilities</> </span>
          <span className="flex gap-1 items-center"> <RightArrow /> Necessities </span>
          <span className="flex gap-1 items-center"> <RightArrow /> Assets </span>
        </div>
        <span className="bg-gray-200 px-4 py-2 rounded-full">
          {`Concept derived from 'Rich Dad, Poor Dad'`}
        </span>
        <button onClick={signInWithGoogle} className="bg-[#E8F44A] flex justify-center gap-4 center w-60 mt-10 py-4 rounded-lg">
          <GoogleIcon />
          <span className="font-semibold">Login or Sign Up</span>
        </button>
      </div>
    </>
  );
};

export default Home;
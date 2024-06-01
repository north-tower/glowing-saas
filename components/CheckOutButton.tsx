"use client"

import { db } from '@/firebase';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { useSession } from 'next-auth/react'
import Link from 'next/link';
import React, { useState } from 'react'
import LoadingSpinner from './LoadingSpinner';

function CheckOutButton({ sub } : { sub: string }) {
  const { data: session} = useSession();

  const [loading,setLoading] = useState(false);

  const createCheckOutSession = async () => {
    if(!session?.user.id) return;

    setLoading(true);



  

  



  }
  return (
    <Link href="/checkout" className='mt-8 block rounded-md bg-indigo-600 
    px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500
    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
    focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-80 
    disabled:bg-indigo-600/50 disabled:text-white disabled:cursor-default
    '>{loading ? <LoadingSpinner /> : "Sign Up"}</Link>
  )
}

export default CheckOutButton
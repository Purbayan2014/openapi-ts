'use client'

import { FC, useState } from 'react'
import { Button } from './Button'
import {  signOut } from 'next-auth/react'
import { toast } from './Toast'
interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps>  = ({}) => {
  const [isLoading, setisLoading ] = useState<boolean>(false)

  const signUserOut = async () => {
    setisLoading(true)

    try{
      await signOut
      // toast({
      //   title : 'Success signing out',
      //   message : 'SignOut is working',
      //   type : 'success',
      //  })
    } catch (error) {
       toast({
        title : 'Error signing out',
        message : 'Please try again after some time',
        type : 'error',
       })
    } 
  }

  return  (
    // whenever the isLoading is true we can sign in 
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign Out
    </Button>
  )
}

export default SignOutButton
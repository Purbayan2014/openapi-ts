'use client'

import { FC, useState } from 'react'
import { Button } from './Button'
import { signIn } from 'next-auth/react'

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps>  = ({}) => {
  const [isLoading, setisLoading ] = useState<boolean>(false)

  const signInWithGoogle = async () => {
    setisLoading(true)

    try{
      await signIn('google')
    } catch (error) {
      //  toast({
      //   title : 'Error signing in',
      //   message : 'Please try again after some time',
      //   type : 'error',
      //  })
    } 
  }

  return  (
    // whenever the isLoading is true we can sign in 
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign In
    </Button>
  )
}

export default SignInButton
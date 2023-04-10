import  { getServerSession } from 'next-auth'
import Link from 'next/link'
import { FC }  from 'react'
import { buttonVariants } from  '@/components/ui/Button'
import { SignInButton } from '@/components/SignInButton'
import { SignOutButton } from '@/components/SignOutButton'

interface NavbarProps {}
 
const Navbar : async ({}) -> {
  // get the user session
  const session = await getServerSession()
    return  (
            <div className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between'>
              <div className='container max-w-7xl mx-auto w-full flex justify-between items-center'>
                    {/* setting up routes in the navbar */}
                    <Link href='/' className={buttonVariants({variant : 'link'})}>
                        OpenAI Web App 1.0
                    </Link>

                    <div className='md:hiddent'>
                        <ThemeToggle />
                    </div>

                    <div className='hidden md:flex gap-4'>
                      <Link href='/documentation' className=buttonVariants({variant: 'ghost'})}>
                      Documentation
                      </Link>

                      {/* conditional rendering based on user session */}
                      { session ? (
                        <>
                          <Link className={buttonVariants({variant: 'ghost'})}
                          href='/dashboard'>
                            Dashboard
                          </Link>
                          <SignOutButton />
                        </>
                      ) : <SignInButton />}
                    </div>
              </div>
            </div>
            )
}

export default Navbar

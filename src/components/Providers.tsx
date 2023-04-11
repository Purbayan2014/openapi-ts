// provides context to the client server architecture 
// to use this as the client
'use client' 

import { FC , ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from  'next-auth/react' 

// using interface to pass props 
// method :: 1 
// interface ProvidersProps {}
//
// const Providers : FC<ProvidersProps> = ({}) -> {
  // return <div>Providers</div>
// }

// method 2 :: 
// using react node 

interface ProvidersProps {
  children: ReactNode
}
const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  )
}

export default Providers
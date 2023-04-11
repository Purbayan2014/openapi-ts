'use client'

import { FC } from 'react'
import  Simplebar from 'simplebar-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs'
import Code from '@/ui/Code'
import { nodejs, python, cpp, java, graphql, rust } from '@/helpers/documentation-code'
const DocumentationTabs: FC = () => {
    return (
        <Tabs defaultValue='nodejs' className='max-w-2xl w-full'>
        <TabsList>
          <TabsTrigger value='nodejs'>NodeJS</TabsTrigger>
          <TabsTrigger value='python'>Python</TabsTrigger>
          <TabsTrigger value='cpp'>C++</TabsTrigger>
          <TabsTrigger value='graphql'>Graphql</TabsTrigger>
          <TabsTrigger value='rust'>Rust</TabsTrigger>
          <TabsTrigger value='java'>Java</TabsTrigger>
          {/* <TabsTrigger value='bash'>Bash</TabsTrigger> */}
        </TabsList>
       
        <TabsContent value='nodejs'>
          <Simplebar forceVisible='y'>
            <Code animated code={nodejs} language='javascript' show />
          </Simplebar>
        </TabsContent>
  
        <TabsContent value='python'>
          <Simplebar forceVisible='y'>
            <Code animated code={python} language='python' show />
          </Simplebar>
        </TabsContent>
              
      <TabsContent value='c++'>
      <Simplebar forceVisible='y'>
      <Code animated code={cpp} language='cpp' show />
      </Simplebar>
      </TabsContent>
      
      <TabsContent value='graphql'>
      <Simplebar forceVisible='y'>
          <Code animated code={graphql} language='graphql' show />
      </Simplebar>
      </TabsContent>
      
      <TabsContent value='rust'>
      <Simplebar forceVisible='y'>
      <Code animated code={rust} language='go' show />
      </Simplebar>
      </TabsContent>
      
      <TabsContent value='java'>
      <Simplebar forceVisible='y'>
      <Code animated code={java} language='javascript' show />
      </Simplebar>
      </TabsContent>
      
      {/* <TabsContent value='bash'>
      <Simplebar forceVisible='y'>
      <Code animated code={bash} language='bash' show />
      </Simplebar>
      </TabsContent> */}
      </Tabs>
    )
    
}

export default  DocumentationTabs
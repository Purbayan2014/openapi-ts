'use client'

import { FC, FormEvent, useState }  from 'react'
import { toast } from '@/ui/Toast'
import { createApiKey } from '@/helpers/create-api-key'
import { Key } from 'lucide-react'
import { Button } from '@/ui/Button'
import LargeHeading from '@/ui/LargeHeading'
import Paragraph from '@/ui/paragraph'
import CopyButton from '@/components/CopyButton'
import { Input } from '@/ui/Input'


const RequestApiKey : FC = () => {

    const [isCreating, setIsCreating] = useState<boolean>(false)
    const [apikey, setApiKey] = useState<string | null>(null)

    const createNewApiKey = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setIsCreating(true)

        try {
            const generatedApiKey = await createApiKey()
            setApiKey(generatedApiKey)
        } catch(err) {
            if (err instanceof Error) {
                // if the error is an instance of Error, we can safely assume that it is a custom error
                toast({
                    title : 'Error',
                    message : err.message,
                    type : 'error',
                })

                return
            }

            // since we are not throwing any error, we can safely assume that the error is a network error
            toast({
                title : 'Error',
                message : 'Something went wrong while generating the API key',
                type : 'error',
            })
        } finally {
            // as we are done creating the api key, we can set isCreating to false
            setIsCreating(false)
        }
    }

    return (
        <div className='container md:max-w-2xl'>
          <div className='flex flex-col gap-6 items-center'>
            <Key className='mx-auto h-12 w-12 text-gray-400' />
            <LargeHeading className='text-center'>
              Request your API key
            </LargeHeading>
            <Paragraph>You haven&apos;t requested for an  API key yet.</Paragraph>
          </div>
          <form
            onSubmit={createNewApiKey}
            className='mt-6 sm:flex sm:items-center'
            action='#'>
            <label htmlFor='emails' className='sr-only'>
              Your API key
            </label>
            <div className='relative rounded-md shadow-sm sm:min-w-0 sm:flex-1'>
              {/* Show a copy icon if API key was generated successfully */}
              {apikey ? (
                <CopyButton
                  className='absolute inset-y-0 right-0 animate-in fade-in duration-300'
                  valueToCopy={apikey}
                />
              ) : null}
              <Input
                readOnly
                value={apikey ?? ''}
                placeholder='Request an API key to display it here'
              />
            </div>
            <div className='mt-6 flex justify-center sm:mt-0 sm:ml-4 sm:flex-shrink-0'>
              <Button disabled={!!apikey} isLoading={isCreating}>
                Request key
              </Button>
            </div>
          </form>
        </div>
      )
}

export default RequestApiKey 
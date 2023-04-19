import { FC } from "react";

import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import ApiDashBoard from '@/components/ApiDashBoard'
import RequestApiKey from '@/components/RequestApiKey'

export const metadata: Metadata = {
    title: 'Plagarism API | Home',
    description: 'Free & open-source Plagarism checking API',
}

interface PageProps {}

const Page = async () => {

    const user = await getServerSession(authOptions)
    if(!user) {
        return notFound()
    }

    const apiKey = await db.apiKey.findFirst({
        where : {
            userId: user.user.id, enabled: true
        },
    })

    return (
        <div className="max-w-7xl max-auto mt-16">
            {
                apiKey ? (
                    // @ts-expect-error Server Component
                    <ApiDashBoard />):
                    (
                     <RequestApiKey/>
                    )
            }
        </div>
    )
}


export default Page;

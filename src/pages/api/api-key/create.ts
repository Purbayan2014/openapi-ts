import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { CreateApiData } from "@/types/api";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import {nanoid} from "nanoid"
import {z} from 'zod'
import { withMethods } from "@/lib/api-middlewares/with-method";


const handler = async (
    req: NextApiRequest, 
    res: NextApiResponse<CreateApiData>
) => {


    try {
        // get the user session
        const user = await getServerSession(req, res, authOptions).then(
            (res) => res?.user
        )

        if(!user) {
            return res.status(401).json({
                error : 'Unauthorized to perform this action',
                createdApiKey: null
            })
        }

        // check if the user already has an api key generated or not
        const existingApiKey = await db.apiKey.findFirst({
            where : {userId: user.id, enabled: true}
        })

        if (existingApiKey) {
            return res.status(400).json({
                error : 'You already have an api key',
                createdApiKey: null
            })
        }

        // now if the user doesnt has an api key, we will generate one for him
        const createdApiKey = await db.apiKey.create({
            data : {
                userId: user.id,
                key: nanoid(),
            }
        })

        // return the api key that is created
        return res.status(200).json({
            error: null, 
            createdApiKey 
        })
    } catch(error) {
        // check for error
        if(error instanceof z.ZodError) {
            return res.status(400).json({
                error: error.issues,
                createdApiKey: null
            })
        }

        // return the error of unknown type
        return res.status(500).json({
            error : 'Internal Server Error',
            createdApiKey : null
        })
    }
}

export default withMethods(['GET'], handler)
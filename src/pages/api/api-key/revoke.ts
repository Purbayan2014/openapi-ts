import { withMethods } from "@/lib/api-middlewares/with-method";
import { NextApiRequest, NextApiResponse } from "next";
import { RevokeApiData } from "@/types/api";
import { db } from "@/lib/db";
import { authOptions } from '../../../lib/auth';
import { getServerSession } from 'next-auth';
import {z} from 'zod'


const handler = async (
    req : NextApiRequest,
    res : NextApiResponse<RevokeApiData>
) => {
    try {

        // get the user session
        const user = await getServerSession(req, res, authOptions).then(
            (res) => res?.user
        )

        // in case the user is not logged in
        if(!user) {
            return res.status(401).json({
                error : 'Unauthorized to perform this action',
                success: false
            })
        }

        // check if the user has an api key or not
        const existingApiKey = await db.apiKey.findFirst({
            where : {
                userId : user.id,
                enabled : true
            },
        })

        // if the user doesnt have an api key
        if(!existingApiKey) {
            return res.status(400).json({
                error : 'You dont have an api key',
                success: false
            })
        }

        // now if the user has an api key, we will revoke it
        await db.apiKey.update({
            where: { id: existingApiKey.id },
            data: {
              enabled: false,
            },
          })

    } catch(err) {
        // incase of zod Error
        if(err instanceof z.ZodError) {
            return res.status(400).json({
                error: err.issues,
                success: false
            })
        }

        // incase of unknown error types
        return res
                .status(500)
                .json({
                    error : "Internal Server Error",
                    success : false
                })
    }
}

export default withMethods(['POST'], handler)
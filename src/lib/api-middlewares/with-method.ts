import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

// this is a middleware that will check if the request method is in the methods array
// if not, it will return a 405 status code
//  if yes, it will call the handler
// this is useful when you want to restrict the api to only certain methods
// for example, you can use this to restrict the api to only GET requests
//  or you can use this to restrict the api to only POST requests
// or you can use this to restrict the api to only GET and POST requests
// or you can use this to restrict the api to only GET, POST and DELETE requests
// or you can use this to restrict the api to only GET, POST, DELETE and PUT requests
export function withMethods(methods: string[], handler: NextApiHandler) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if (!req.method || !methods.includes(req.method)) {
      return res.status(405).end()
    }

    return handler(req, res)
  }
}
import express, { Request, Response, Router } from 'express'
import serverless from 'serverless-http'

const api = express()

const router = Router()
router.get('/hello', (_: Request, res: Response) => {
	res.send('Hello World!')
})

api.use('/api/', router)

export const handler = serverless(api)

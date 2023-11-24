import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'
import Server from '@infrastructure/web/express'

dotenvExpand.expand(dotenv.config())
const PORT = parseInt(process.env.PORT as string)

Server.start(PORT)
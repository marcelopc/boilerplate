import express from 'express'
import cors from 'cors'
import { configureRoutes } from '../routes/UserRoutes'

const app = express()

export const start = (port: number): void => {
  try {
    app.listen(port)

    app.use(express.json())
    app.use(cors())

    app.use('/api', configureRoutes());

    console.log(`Server started on port ${port}!\n`)
  } catch (error) {
    process.exit(1)
  }
}

export default { start }

import express, {Express} from "express";
import {userRoutes} from "./domain/users"
import "dotenv/config"

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(userRoutes)

app.listen(process.env.PORT, (): void => {
  console.log(`Server is running on port: ${process.env.PORT}`)
})
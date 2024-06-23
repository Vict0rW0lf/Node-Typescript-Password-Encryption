import express, { Express, Request, Response } from "express";
import 'dotenv/config'

const app: Express = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.listen(process.env.PORT, (): void => {
  console.log(`Server is running on port: ${process.env.PORT}`)
})
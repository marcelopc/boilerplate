const express = require('express')

const PORT = 3000

const app = express()

app.get('/', (req: any, res:any) => {
    res.send({message:'Hello World!'})
})

app.listen(PORT, ()=>{
    console.log("Server started on port " + PORT)
})
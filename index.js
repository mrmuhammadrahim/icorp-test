import express from "express"
import axios from 'axios'
import lt from "localtunnel"
import dotenv from "dotenv"
const app = express()
dotenv.config()


app.use( express.json() )

const testUrl = `https://test.icorp.uz/interview.php`
const PORT = process.env.PORT || 3000
let part1 = null
let part2 = null
let fullCode = null


app.post("/start", async (req, res) =>{

    try {
        const  { msg } = req.body
        const tunnel = await lt({port: PORT })
        const callbackUrl = `${tunnel.url}/callback`

        console.log( callbackUrl )

    
        const response = await axios.post(testUrl, {
            msg,
            url: callbackUrl
        })

        
        part1 = response.data.part1
        console.log("Part1:  ", part1 )
        fullCode = part1 + part2
        console.log("Fullcode:  ", fullCode )
        getFinelMsg()
        res.status(200).send({ part1, callbackUrl })
    } catch (err) {
       res.status(400).send({error: err.toString() }) 
    }
})



app.post("/callback", (req, res) => {
    if( !req.body ){
        res.status(400).send({ message: "Bad request: req.body not found" })

        return
    }

    part2 = req.body.part2
    
    console.log("\n\nPart2:  ", part2 )
    res.status(200).send( { message: "ok" })
})



async function getFinelMsg(){
    try {
        const res = await axios.get( testUrl, {
            params: { code: fullCode }
        })

        console.log("Final msg: ", res.data)
    } catch (error) {
        console.log( error )
    }
}




app.get("/health", ( _ , res) =>{
    res.send({message: "OK"})
})

app.listen( PORT, () =>{
    console.log(`Server listen on port ${PORT}`)
})
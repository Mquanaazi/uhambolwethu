import express from 'express'
import assetsRoutes from './routes/assetsRoutes.js'
import usersRoutes from './routes/usersRoutes.js'
import cors from 'cors'


const app=express()
let port=process.env.PORT
app.use(express.json())
// app.use(cors({origin:'http://localhost:8080',credentials:true}))
// app.use(cors({ origin: '*', credentials: true }))
const frontendPort = process.env.FRONTEND_PORT || 8081

app.use(cors({ origin: `http://localhost:${frontendPort}`, credentials: true }))



app.use('/assets',assetsRoutes)
app.use( '/users',usersRoutes)
app.use(express.static('static'))
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
    
    
})
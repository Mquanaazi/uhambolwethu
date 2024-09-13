import cors from 'cors'
import express from 'express'
import assetsRoutes from './routes/assetsRoutes.js'
import usersRoutes from './routes/usersRoutes.js'
import checkoutRoutes from './routes/checkoutRoutes.js'



const app=express()
app.use(cors({ origin: ['uhambolwettu.web.app','http://localhost:8080'], credentials: true }))
const frontendPort = process.env.FRONTEND_PORT || 8081
// app.use(cors({ origin: `http://localhost:${frontendPort}`, credentials: true }))

let port=process.env.PORT
// app.use(cors({origin:'http://localhost:8080',credentials:true}))
app.use(express.json())




app.use('/assets',assetsRoutes)
app.use( '/users',usersRoutes)
app.use( '/checkOut',checkoutRoutes)
app.use(express.static('static'))
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
    
    
})
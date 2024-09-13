import cors from 'cors'
import express from 'express'
import assetsRoutes from './routes/assetsRoutes.js'
import usersRoutes from './routes/usersRoutes.js'
import checkoutRoutes from './routes/checkoutRoutes.js'



// const frontendPort = process.env.FRONTEND_PORT || 8081
// app.use(cors({ origin: `http://localhost:${frontendPort}`, credentials: true }))
// app.use(cors({origin:'http://localhost:8080',credentials:true}))

const app=express()
let port=process.env.PORT || 2027
app.use(cors({ origin: ['https://uhambolwettu.web.app','http://localhost:8080', 'uhambolwettu.firebaseapp.com'], credentials: true }))
app.use(express.json())
app.use(express.static('public'))

app.use('/assets',assetsRoutes)
app.use( '/users',usersRoutes)
app.use( '/checkOut',checkoutRoutes)

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
    
    
})
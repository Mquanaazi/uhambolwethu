import express from 'express'
import assetsRoutes from './routes/assetsRoutes.js'
import usersRoutes from './routes/usersRoutes.js'


const app=express()
let port=process.env.PORT
app.use(express.json())



app.use('/assets',assetsRoutes)
app.use( '/users',usersRoutes)
app.use(express.static('static'))
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
    
    
})
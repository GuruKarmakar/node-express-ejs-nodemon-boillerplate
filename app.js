const express =  require('express')
const app = express()
const path =(require('path'))
//port 
const port = 3030

//set up default engine as ejs
app.set('view engine','ejs')
app.set('views','views')

//sarve html statically
app.use(express.static(path.join(__dirname,'public')))

//router
const indexRouter = require('./routes/index')

app.use(indexRouter)

app.listen(port , ()=>{
    console.log(`Server running on ${port}`)
})
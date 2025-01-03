const express = require('express')
const path=require('path')
require('dotenv').config()
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000
app.use(cors())


const buildPath = path.join(__dirname, "dist");
app.use(express.static(buildPath));
app.get('*',(req,res)=>{
     res.sendFile(path.join(buildPath, "index.html"));

})
app.listen(PORT, () => { console.log(`APP is Listening at ${PORT}`) })

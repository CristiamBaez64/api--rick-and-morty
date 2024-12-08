const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hola Cristiam')
})

app.listen(3000, () => {
        console.log(`server is running on port http://localhost:3000`);
})
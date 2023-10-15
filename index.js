const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.json({
        success: true,
    })
})

app.listen(port, () => {
    console.log(`Server is listening at localhost:${port}`)
})
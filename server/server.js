const express = require('express')
const cors = require('cors') //<= mechanism that allows servers to specify which origins 
//(i.e., domains) are allowed to access resources on the server (Cross-Origin Resource Sharing)

const app = express() //<= app is a variable that holds the power of express and all it's methods
const PORT = 8000

app.use(express.json()) //<= parses incoming JSON payloads in the request body and makes the resulting data available on the req.body property

app.use(express.urlencoded({extended:true})) //<= When a client sends a URL-encoded payload in the request body, the express.urlencoded() middleware function parses the data and populates the req.body object with the resulting JavaScript object.


app.use(cors({
    origin: 'http://localhost:3000'
}))


require('./config/mongoose.config') //<=server won't run without this
require('./routes/pokemonRoute')(app) //<= gives our server file the ability to communicate routes to the browser

app.listen(PORT, ()=> { //<= absolutely need this, this is what RUNS the server on a specified port, must be last
    console.log(`Listening on port ${PORT}`)
})
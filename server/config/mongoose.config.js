const mongoose = require('mongoose')
//require mongoose grabs mongoose from node_modules

const db = "Pokemon_DB"
//inject into connect method

mongoose.connect(`mongodb://127.0.0.1:27017/${db}`, {//<= used to connect to a local MongoDB instance on port 27017
    useNewUrlParser: true, //<= new url format for mongoose.connect, old one depracated*
    useUnifiedTopology: true //<= false by default, allows us to use mongodb's new connection engine
})
    .then(() => console.log(`Connection to the ${db} established`))
    .catch((err) => console.log(`Could not establish a connection to the ${db}`, err))
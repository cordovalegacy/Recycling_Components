const mongoose = require('mongoose')

const PokemonSchema = new mongoose.Schema({
    name: { type: String },
    nickname: {
        type: String,
        required: [true, "Nickname is required"],
        minLength: [3, "Nickname must be at least 3 characters"]
    },
    type: { type: String },
    image: { type: String },
    berryCount: { type: Number }
}, { timestamps: true })

const Pokemon = mongoose.model('Pokemon', PokemonSchema) //<= takes two arguments
module.exports = Pokemon

//ARGUMENT 1^:
// The name of the model - in this case, we're calling it "Pokemon". This is the name we'll use to refer to the model when we need to perform database operations, like querying or updating.

//ARGUMENT 2^:
//The schema for the model - in this case, we're passing in our PokemonSchema variable, which defines the fields and validation rules for the Pokemon object.

//This page is where we are using mongoose methods to define and interact with our data and database
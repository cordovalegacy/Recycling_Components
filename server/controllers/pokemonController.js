const Pokemon = require('../models/pokemonModel')

module.exports = {

    getAllPokemon: (req, res) => {
        Pokemon.find({})
            .then((allPokemons) => {
                res.status(201).json(allPokemons)
            })
            .catch((err) => {
                res.status(400).json({err})
            })
    },

    createPokemon: (req, res) => {
        Pokemon.create(req.body)
            .then((newPokemon) => {
                res.status(201).json(newPokemon)
            })
            .catch((err) => {
                res.status(400).json({err})
            })
    },

    getOnePokemon: (req, res) => {
        Pokemon.findOne({_id: req.params.id})
            .then((onePokemon) => {
                res.status(201).json(onePokemon)
            })
            .catch((err) => {
                res.status(400).json({err})
            })
    },

    updatePokemon: (req, res) => {
        Pokemon.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
            .then((updatedPokemon) => {
                res.status(201).json(updatedPokemon)
            })
            .catch((err) => {
                res.status(400).json({err})
            })
    },

    //The first argument {_id: req.params.id} is a query object that specifies which document to grab
    //The second argument is the new value we will set with update (req.body)which is an object
    //The third argument is an 'option' that tells mongoose how to 'handle' the operation
    
    //The new option specifies that the updated document should be returned after the update 
    //operation is complete. The runValidators option specifies that Mongoose should validate 
    //the new values against the schema before saving them to the database.

    deletePokemon: (req, res) => {
        Pokemon.deleteOne({_id: req.params.id})
            .then((deletedPokemon) => {
                res.status(201).json(deletedPokemon)
            })
            .catch((err) => {
                res.status(400).json({err})
            })
    }

}

//Another way to export these:************************************************
// module.exports.getAllPokemon = (req, res) => {
//     Pokemon.find({})
//       .then((allPokemons) => {
//         res.status(201).json(allPokemons)
//       })
//       .catch((err) => {
//         res.status(400).json({err})
//       })
//   };
  
//   module.exports.createPokemon = (req, res) => {
//     Pokemon.create(req.body)
//       .then((newPokemon) => {
//         res.status(201).json(newPokemon)
//       })
//       .catch((err) => {
//         res.status(400).json({err})
//       })
//   };
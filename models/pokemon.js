import mongoose from 'mongoose'

const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true},
  img: { type: String, required: true }
}, {timestamps: true})

export const Pokemon = mongoose.model('Pokemon', pokemonSchema)
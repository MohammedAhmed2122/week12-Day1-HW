import dotenv from 'dotenv';
import express from 'express';
import viewEngine from 'jsx-view-engine'
import mongoose from 'mongoose';
import pokemonRouter from './routes/pokemon.js';

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.set('views', './views')
app.set('view engine', 'jsx')
app.engine('jsx', viewEngine())

app.use(express.urlencoded({extended: false}))
app.use('/pokemon', pokemonRouter)

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to the Pokemon App!</h1>
    <a href='/pokemon/'>View Pokemon</a>
  `)
})

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
  console.log('connected to mongo')
  app.listen(PORT, console.log(`listening on port ${PORT}`))
})
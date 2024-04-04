import path from 'path'
import express, { Request, Response } from 'express'
import { engine } from 'express-handlebars'
import { router as pokemonRouter } from './routes/pokemons'


const app = express();
const PORT = 8080;

app.engine('hbs', engine({
    layoutsDir: `./views/layouts`,
    extname: '.hbs'
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/views'));

app.use('/pokemons', pokemonRouter);


app.get('/', (req: Request, res: Response) => {
    res.redirect('/pokemons');
});

app.listen(8080, () => {
    console.log(`Server listening on http://localhost:${PORT} `)
});
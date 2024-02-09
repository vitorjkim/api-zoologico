import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Mamifero } from './model/Mamifero';
import { Reptil} from './model/Reptil';
import { Habitat } from './model/Habitat';
import { Atracao } from './model/Atracao';
import { Zoologico } from './model/Zoologico';

const server = express();
const port = 3000;

server.use(express.json());
server.use(cors());

server.get('/teste1', (req, res) => {
    let ave: Ave = new Ave('Papagaio', 30, 'Masculino', 10);
    res.json(ave);
})

server.get('/testeReptil', (req, res) => {
    let reptil: Reptil = new Reptil('Roberto', 2024, 'Feminino', 'ganoide');
    res.json(reptil);
})

server.get('/testeMamifero', (req, res) => {
    let mamifero: Mamifero = new Mamifero('Felix', 812, 'Masculino', 'Gato');
    res.json(mamifero);
})

server.post('/habitat', (req, res) => {
    const { nome, animais} = req.body;
    const habitat = new Habitat(nome, animais);
    console.log(habitat);
    res.status(200).json('Habitat criada')
})

server.post('/atracao', (req, res) => {
    const { nome, habitat} = req.body;
    const atracao = new Atracao(nome, habitat);
    console.log(atracao);
    res.status(200).json('Atração criada')
})

server.post('/zoologico', (req, res) => {
    const { nome, atracao} = req.body;
    const zoologico = new Zoologico(nome, atracao);
    console.log(zoologico);
    res.status(200).json('Zoologico criada')
})

server.listen(port, () => {
    console.log(`Servidor está escutando no endereço http://localhost:${port}`);
})
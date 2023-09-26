const express = require('express');
const routes = express.Router();

let db = [
    { id: '1', nome: 'Garnet', tipo: 'Fusão de Rubi e Safira', habilidade: 'Futuro Visão' },
    { id: '2', nome: 'Amethyst', tipo: 'Quartzo', habilidade: 'Chicote' },
    { id: '3', nome: 'Pearl', tipo: 'Pérola', habilidade: 'Lutar com uma lança' },
    { id: '4', nome: 'Steven Universe', tipo: 'Híbrido de Gem e Humano', habilidade: 'Escudo' },
    { id: '5', nome: 'Ruby', tipo: 'Rubi', habilidade: 'Visão térmica' },
    { id: '6', nome: 'Sapphire', tipo: 'Safira', habilidade: 'Previsão do futuro' },
    { id: '7', nome: 'Rose Quartz', tipo: 'Quartzo Rosa', habilidade: 'Curar e curvar plantas' },
    { id: '8', nome: 'Lapis Lazuli', tipo: 'Lápis-Lazúli', habilidade: 'Hidrocinese' },
    { id: '9', nome: 'Peridot', tipo: 'Peridoto', habilidade: 'Controle de metal e tecnologia' },
    { id: '10', nome: 'Bismuth', tipo: 'Bismuto', habilidade: 'Forjar armas e construir' },
    { id: '11', nome: 'Jasper', tipo: 'Jaspe', habilidade: 'Força e habilidades de combate' },
    { id: '12', nome: 'Lion', tipo: 'Leão', habilidade: 'Portais de dimensão' },
    { id: '13', nome: 'Connie Maheswaran', tipo: 'Humano', habilidade: 'Espadachim habilidosa' },
    { id: '14', nome: 'Aquamarine', tipo: 'Água-marinha', habilidade: 'Controlar hidrocarbonetos' },
    { id: '15', nome: 'Topaz', tipo: 'Topázio', habilidade: 'Fusão de Topaz' },
    { id: '16', nome: 'Sardonyx', tipo: 'Fusão de Pérola e Rubi', habilidade: 'Força e agilidade' },
    { id: '17', nome: 'Opal', tipo: 'Fusão de Pérola e Ametista', habilidade: 'Arco e flecha' },
    { id: '18', nome: 'Smoky Quartz', tipo: 'Fusão de Ametista e Steven', habilidade: 'Ioga de Combate' },
    { id: '19', nome: 'Rainbow Quartz', tipo: 'Fusão de Pérola e Rose Quartz', habilidade: 'Manuseio de guarda-chuva' },
    { id: '20', nome: 'Spinel', tipo: 'Spinela', habilidade: 'Bumerangue retrátil' }
];

// Buscar dados
routes.get('/', (req, res) => {
    return res.json(db)
});

// Inserir dados
routes.post(`/add`, (req, res) => {
    const body = req.body

    if(!body)
        return res.status(400).end()

    db.push(body)
    return res.json(body)
});

routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if(!item[id])
        return item
    })

    db = newDB

    return res.send(newDB)
})

module.exports = routes;
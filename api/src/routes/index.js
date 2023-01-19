const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const games = require("./gamesRoutes.js")
const genres = require("./genresRoutes.js")
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', games);
router.use('/genres', genres);


module.exports = router;

const { Videogame, GamesGenre, Genre } = require("../db.js");
const axios = require("axios");
const { KEY } = process.env;
const { Op } = require("sequelize");
const url = `https://api.rawg.io/api/games?key=${KEY}`
// FILTRO PARA TRAER LAS PROPIEDADES NECESARIAS 
const filtroData = (result) => {
  let apigames = result.map((game) => {
    let genres = game.genres.map((genre) => genre.name);
    let platforms = game.platforms.map((platform) => platform.platform.name);
    return {
      id: game.id,
      name: game.name,
      platform: platforms,
      released: game.released,
      rating: game.rating,
      image: game.background_image,
      genres: genres,
    };
  });
  return apigames;
};
// TOMO TODOS LOS GAMES DE LA API TOMO TODOS LOS GAMES DE LA BASE DE DATOS FUSIONO LOS DATOS DE LA DB Y DE LA API EN UN SOLO ARRAYX
const getAllgames = async () => {
  try {
    let gamesapi1 = await axios.get(url+"&page=1");
    let gamesapi2 = await axios.get(url+"&page=2")
    let gamesapi3 = await axios.get(url+"&page=3");
    let gamesapi4 = await axios.get(url+"&page=4");
    let gamesapi5 = await axios.get(url+"&page=5");
    await Promise.all([gamesapi1,gamesapi2,gamesapi3,gamesapi4,gamesapi5,
    ]).then((values) => {
      result = values[0].data.results
        .concat(values[1].data.results)
        .concat(values[2].data.results)
        .concat(values[3].data.results)
        .concat(values[4].data.results);
    });
    let apigames = filtroData(result);
    let gamesbd = await Videogame.findAll({
      attributes:["id", "name", "description", "released", "rating", "platform","image"],
      include:{
        model:Genre,
        attributes:["genre"],
        through: {
          attributes:[]}}});
    let cleanGames = gamesbd.concat(apigames);
    console.log(cleanGames.length);
    return cleanGames;
  } catch (err) {
    throw new Error("API error");
  }
};
// #################🚨 GET VIDEOJUEGOS 🚨    ####################
const getVideogames = async (name) => {
  if (name) {
    let slug = name.split(" ").join("-").toLowerCase();
    const games = await axios.get(url + `&search=${slug}`);
    let result = games.data.results;
    let apigames = filtroData(result);
    let dbname = await Videogame.findAll({
      where: { 
        name: { [Op.iLike]: `%${name}%`},
    },
    attributes:["id", "name", "description", "released", "rating", "platform","image"],
    include:{
      model:Genre,
      attributes:["genre"],
      through: {
        attributes:[]}}
    });
    let cleanGames = dbname.concat(apigames);
    if (cleanGames.length == 0) {
      console.log("error");
      throw new Error("Name not found");
    } else return cleanGames;
  } else {
    let games = getAllgames();
    return games;
  }
};
// #################🚨 CREATE VIDEOJUEGOS 🚨    ####################
const createVideogames = async (name,description,released,rating,platform,genre
) => {
  const newGame = await Videogame.create({name,description,released,rating,platform,});
  await newGame.addGenres(genre)
  return newGame;
};
// #################🚨 GET VIDEOJUEGOS BY ID 🚨    ####################
const getVideogamesById = async (id) => {
  if (!isNaN(id)) {
    try {
      let gamebyid = await axios.get(`https://api.rawg.io/api/games/${id}?key=${KEY}`);
      if (gamebyid) {
         let game = gamebyid.data
         let platforms = game.platforms.map((platform) => platform.platform.name);
         let genres = game.genres.map((genre) => genre.name);
         return {
            name: game.name,
            description: game.description,
            released: game.released,
            image: game.background_image,
            rating: game.rating,
            platform: platforms,
            genres: genres

         }
      } else {
        {
          throw new Error("Id not found");
        }
      }
    } catch {
      {
        throw new Error("Id not found");
      }
    }
  } else {
    try {
      let result = await Videogame.findByPk(id);
      if (result) return result;
      else {
        {
          throw new Error("Id not found");
        }
      }
    } catch {
      {
        throw new Error("Id not found");
      }
    }
  }
};
module.exports = { getVideogames, createVideogames, getVideogamesById }

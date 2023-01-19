const {Videogame,GamesGenre,Genre}= require("../db.js")
const axios = require("axios");
const { KEY } = process.env;
const url = `https://api.rawg.io/api/genres?key=${KEY}`


const getGenre = async()=>{
    let lala = await Genre.findAll()
    if (lala.length > 0){return lala}
    else{
        let genres = await axios.get(url)
        let result = genres.data.results
        let cleanGenres = result.map((genre)=>genre.name)
        cleanGenres.forEach(async(element)=>{await Genre.create({genre: element})})
        let db = await Genre.findAll()
        return db
    }
}
 module.exports = getGenre
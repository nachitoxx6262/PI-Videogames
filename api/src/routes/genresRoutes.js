const {Router} = require("express")
const getGenre = require("../controllers/gernesController.js")
const genres = Router()


genres.get("/", async(req,res)=>{
    try{
        let result = await getGenre()
        res.json(result)

    }catch(err){
        res.status(404).json({error: "Genres not found"})
    }
})

module.exports = genres
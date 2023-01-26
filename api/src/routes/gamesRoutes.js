const {Router} = require("express")
const {getVideogames,createVideogames,getVideogamesById} = require("../controllers/gamesController.js")
const games = Router()

// #################🚨 GET 🚨    ####################
// get by
games.get("/", async(req,res)=>{
    let {name} = req.query
try{
    let games = await getVideogames(name)
    res.json(games)
}catch(err){
    res.status(404).json({APIerror: err.message})
}
  
}),
games.get("/:id", async(req,res)=>{
    const {id} = req.params
    try{
        let gamesbyid = await getVideogamesById(id)
        res.json(gamesbyid)
    }catch(err){
        res.status(404).json({message: err.message})
    }
      
}),
    



// #################🚨 POST 🚨    ####################
games.post("/", async(req,res)=>{
    try{
        let {name,description,released, rating,platform,genre} = req.body
        createVideogames(name,description,released, rating,platform,genre)
        res.json({ok: "ok"})
    }catch{
        res.status(404).json({error: "Hubo un error"})
    }
    
})

module.exports = games
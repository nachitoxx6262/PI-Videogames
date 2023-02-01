export const orderGames = (payload, state) => {
    const direction = payload === "ASC" || payload === "MAY" ? -1 : 1;
    const sortType = payload === "ASC" || payload === "DESC" ? 'name' : 'rating'
    return state.gamesFilter.slice().sort((a, b) => {
    return (a[sortType] < b[sortType]) ? direction : (a[sortType] > b[sortType]) ? -direction : 0;
    });
}
export const filterGames = (payload,state)=>{
    if(payload === "ADD"||payload === "EXI"||payload === "ALL"){
        if(payload === "ADD") return state.gamesFilter.filter(game => game.image== "https://media.kasperskydaily.com/wp-content/uploads/sites/92/2020/02/17105257/game-ratings-featured.jpg")
        else if (payload === "EXI") return state.gamesFilter.filter(game => game.image != "https://media.kasperskydaily.com/wp-content/uploads/sites/92/2020/02/17105257/game-ratings-featured.jpg")
        else return state.games
    }else{
        let b = state.gamesFilter
        let a =  b.filter((game)=> game.genres.includes(payload))

        return a
    }
}


export const filtro =(payload)=>{
    let id = payload.id
    let array = []
    if(id?.length>5){
         payload.Genres?.map(element=>array.push(element.genre))
         payload.genres = array
    }
    return payload
}
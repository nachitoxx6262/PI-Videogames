export const orderGames = (payload, state) => {
    const direction = payload === "ASC" || payload === "MAY" ? -1 : 1;
    const sortType = payload === "ASC" || payload === "DESC" ? 'name' : 'rating'
    return state.games.slice().sort((a, b) => {
    return (a[sortType] < b[sortType]) ? direction : (a[sortType] > b[sortType]) ? -direction : 0;
    });
}
export const filterGames = (payload,state)=>{
    if(payload === "ADD"){
        return state.games.filter(game => game.image== "https://media.kasperskydaily.com/wp-content/uploads/sites/92/2020/02/17105257/game-ratings-featured.jpg")
    }else if (payload === "EXI"){
        return state.games.filter(game => game.image != "https://media.kasperskydaily.com/wp-content/uploads/sites/92/2020/02/17105257/game-ratings-featured.jpg")
    }else return state.games
}

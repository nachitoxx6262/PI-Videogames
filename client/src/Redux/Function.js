export const orderGames = (payload, state) => {
    const direction = payload === "ASC" || payload === "MAY" ? -1 : 1;
    const sortType = payload === "ASC" || payload === "DESC" ? 'name' : 'rating'
    return state.games.slice().sort((a, b) => {
    return (a[sortType] < b[sortType]) ? direction : (a[sortType] > b[sortType]) ? -direction : 0;
    });
}

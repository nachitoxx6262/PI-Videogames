import { GET_VIDEOGAMES,SEARCH_GAMES,RESET } from "./action";
const initialState = {
  games: [],
  gamesFilter:[]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        games: action.payload,
        gamesFilter: action.payload,
      };
      case SEARCH_GAMES:
      return {
        ...state,
        gamesFilter: state.games.filter((game)=>game.name.toUpperCase().includes(action.payload.toUpperCase()) || game.id == action.payload),
      };
      case RESET:
        return {
          ...state,
          gamesFilter: state.games,
        };
    default:
      return {
        ...state,
      };
  }
};
export default rootReducer;

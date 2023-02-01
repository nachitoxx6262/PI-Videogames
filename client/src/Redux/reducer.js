import {orderGames,filterGames,filtro} from "./Function"
import {
  GET_VIDEOGAMES,
  SEARCH_GAMES,
  RESET,
  GET_BYID,
  RESET_BYID,
  GET_GENRE,
  ORDER,
  FILTER
} from "./action";
const initialState = {
  games: [],
  gamesFilter: [],
  gameById: [],
  genres: [],
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
        gamesFilter: state.gamesFilter.filter(
          (game) =>
            game.name.toUpperCase().includes(action.payload.toUpperCase()) ||
            game.id == action.payload
        ),
      };
    case GET_BYID:
      let resultado = filtro(action.payload)
      return {
        ...state,
        gameById: resultado,
      };
    case RESET_BYID:
      return {
        ...state,
        gameById: [],
      };
    case RESET:
      return {
        ...state,
        gamesFilter: state.games,
      };
    case GET_GENRE:
      return {
        ...state,
        genres: action.payload,
      };
    case ORDER:
      let payload = action.payload
      let result = orderGames(payload, state)
      return {
        ...state,
        gamesFilter : result,
      };
      case FILTER:
      let payloads = action.payload
      let results = filterGames(payloads, state)
      return {
        ...state,
        gamesFilter : results,
      };
    default:
      return {
        ...state,
      };
  }
};
export default rootReducer;

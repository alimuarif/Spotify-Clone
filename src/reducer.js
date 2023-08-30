// export const initialState = {
//   user: null,
//   playlists: [],
//   playing: false,
//   item: null,
// };

// const reducer = (state, action) => {
//   console.log(action);

//   // Action -> type,[payload]

//   switch (action.type) {
//     case "SET_USER":
//       return {
//         ...state,
//         user: action.user,
//       };
//     default:
//       return state;
//   }
// };

// export default  reducer


// import { findAllByDisplayValue } from "@testing-library/react";


export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  // token:"BQDVws1xIPxI2Eu8obagiPncRDmBbnoAZaBBYKe1LtieNAbzwSNDZyCvDY6LfUwPejfMFu1b5Bg-7XLYpo5y6Vd3dKybxhnelJUWehyjwnmXwtXLXznV59wXLl6agID5fzX-Dc6KBywdOOvgVcqD62mdq_9D1r8JWHZpomEmBjGmQ0aphm6whk4IR9ULZedQrIDme9W2JAqZJlESIcjF"
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
      case "SET_DISCOVER_WEEKLY":
        return{
          ...state,
          discover_weekly:action.discover_weekly,
        }
    default:
      return state;
  }
};

export default reducer;
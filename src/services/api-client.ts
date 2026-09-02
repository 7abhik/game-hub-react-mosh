// https://api.rawg.io/api/games/{game_pk}/additions

import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c944c55fd0594e169603334692aa8abf",
  },
});

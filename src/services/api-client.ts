import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "eb4153568c8846cfb59ea70d10b886c3",
  },
});

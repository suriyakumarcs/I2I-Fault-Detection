import axios from "axios";
const api = "http://rest.learncode.academy/api";

const getFriends = () => axios({
  method: "GET",
  url: `${api}/johnbob/friends`
});

export {
  getFriends
};

import axios from "axios";

const authAxios = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export default authAxios;

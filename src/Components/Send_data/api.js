



import axios from "axios";

// const URL = "http://localhost:8000/";
const URL="https://backendapifoodselec.onrender.com/";
export async function saved_data(data) {
  return await axios.post(`${URL}savedata`, data);
}

export async function get_data() {
  return await axios.get(`${URL}getdata`);
}
// export default saved_data;
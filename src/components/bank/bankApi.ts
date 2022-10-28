import axios from "axios";

export async function getBanks() {
    const response = await axios.get('https://dev.obtenmas.com/catom/api/challenge/banks');
    return response.data;
  }
  
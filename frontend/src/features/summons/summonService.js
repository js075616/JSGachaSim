import axios from "axios";

const API_URL = "/api/summon";

const getNewSummon = async () => {
  const response = await axios.get(API_URL + "/firstbanner");

  return response.data;
};

const summonService = {
  getNewSummon,
};

export default summonService;

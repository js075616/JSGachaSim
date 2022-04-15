import axios from "axios";

const API_URL = "/api/summon";

const getDFSummon = async () => {
  const response = await axios.get(API_URL + "/dfbanner");

  return response.data;
};

const getRDSummon = async () => {
  const response = await axios.get(API_URL + "/rdbanner");

  return response.data;
};

const summonService = {
  getDFSummon,
  getRDSummon,
};

export default summonService;

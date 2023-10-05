import axiosWithApi from "../../Api/axiosWithApiServer";
import {
  CONTESTS_ADD,
  CONTEST_LIST,
  MATCH_LIST,
  MATCH_SQUAD,
  PRIZE_MODELS,
  PRIZE_MODELS_ADD,
} from "../../Api/URI";

export const getAllMatches = () => {
  const url = MATCH_LIST.url;
  return axiosWithApi({ url, method: MATCH_LIST.reqType });
};
export const getMatcheById = () => {
  const url = MATCH_LIST.url;
  return axiosWithApi({ url, method: MATCH_LIST.reqType });
};
export const getContestByMatchId = (id) => {
  const url = CONTEST_LIST.url + id;
  return axiosWithApi({ url, method: CONTEST_LIST.reqType });
};
export const getSquadByMatchId = (id) => {
  const url = MATCH_SQUAD.url + id;
  return axiosWithApi({ url, method: MATCH_SQUAD.reqType });
};
export const getPrizeDisModels = () => {
  const url = PRIZE_MODELS.url;
  return axiosWithApi({ url, method: PRIZE_MODELS.reqType });
};
export const addPrizeDisModels = (body) => {
  const url = PRIZE_MODELS_ADD.url;
  return axiosWithApi({ url, method: PRIZE_MODELS_ADD.reqType, body });
};
export const addContests = (body) => {
  const url = CONTESTS_ADD.url;
  return axiosWithApi({ url, method: CONTESTS_ADD.reqType, body });
};

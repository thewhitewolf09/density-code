export const CREATE_OTP = {
  url: "auth/signinup/code",
  reqType: "post",
};
export const MATCH_LIST = {
  url: "match?all=true",
  reqType: "get",
};
export const CONTEST_LIST = {
  url: "contest?matchId=",
  reqType: "get",
};
export const MATCH_SQUAD = {
  url: "match/get_squad?id=",
  reqType: "get",
};
export const CREATE_ORDER = {
  url: "razorpay_create_payment",
  reqType: "post",
};
export const VERIFY_PAYMENT = {
  url: "razorpay_verify_payment",
  reqType: "put",
};
export const PLAYER_STATS = {
  url: "player?id=",
  reqType: "get",
};

export const PLAYER_LIST = {
  url: "player",
  reqType: "get",
};
export const PRIZE_MODELS = {
  url: "prize_distribution?id=all",
  reqType: "get",
};
export const PRIZE_MODELS_ADD = {
  url: "prize_distribution",
  reqType: "post",
};
export const CONTESTS_ADD = {
  url: "contest/list",
  reqType: "post",
};
export const QUESTION_LIST = {
  url: "parlay_questions?id=",
};

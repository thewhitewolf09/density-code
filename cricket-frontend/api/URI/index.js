export const USER_EXISTS = {
	url: 'user_exists?phoneNumber=',
	reqType: 'get',
}

export const CREATE_OTP = {
	url: 'auth/signinup/code',
	reqType: 'post',
}

export const CONSUME_OTP = {
	url: 'auth/signinup/code/consume',
	reqType: 'post',
}

export const MATCH_LIST = {
	url: 'match?all=true',
	reqType: 'get',
}

export const MATCH_LIST_BY_USER = {
	url: 'match?userId=',
	reqType: 'get',
}

export const CONTEST_LIST_BY_USER_AND_MATCH = {
	url: 'contest_by_user_match',
	reqType: 'get',
}

export const CONTEST_LIST = {
	url: 'contest?matchId=',
	reqType: 'get',
}

export const CONTEST_LIST_BY_ID = {
	url: 'contest?userId=',
	reqType: 'get',
}

export const CONTEST_PARTICIPATION = {
	url: 'participation?userid=',
	reqType: 'get',
}

export const CONTEST_PARTICIPATION_BY_CONTEST_ID = {
	url: 'participation?contestid=',
	reqType: 'get',
}

export const PARLAY_CONTEST_LIST = {
	url: 'parlay_contest?matchID=',
	reqType: 'get',
}

export const PRIZE_DISTRIBUTION = {
	url: 'prize_distribution?id=',
	reqType: 'get',
}
export const MATCH_SQUAD = {
	url: 'match/get_squad?id=',
	reqType: 'get',
}
export const CREATE_PARTICIPATION = {
	url: 'participation',
	reqType: 'post',
}
export const UPDATE_PARTICIPATION = {
	url: 'participation',
	reqType: 'put',
}

export const CREATE_PARTICIPATION_PARLAY = {
	url: 'parlay_participation',
	reqType: 'post',
}

export const CREATE_ORDER = {
	url: 'razorpay_create_payment',
	reqType: 'post',
}
export const VERIFY_PAYMENT = {
	url: 'razorpay_verify_payment',
	reqType: 'put',
}
export const PLAYER_STATS = {
	url: 'player?id=',
	reqType: 'get',
}

export const PLAYER_LIST = {
	url: 'player',
	reqType: 'get',
}

export const QUESTION_LIST = {
	url: 'parlay_questions?id=',
}

export const ALL_QUESTION_LIST = {
	url: 'parlay_question?all=true',
	reqType: 'get',
}

export const GET_LEADERBOARD_BY_CONTEST_ID = {
	url: 'contest/leaderboard_lite?id=',
	reqType: 'get',
}

export const GET_PROFILE_BY_USER_ID = {
	url: 'get_portfolio',
	reqType: 'post',
}
export const GET_PRICE_HISTORY_BY_USER_ID = {
	url: 'player/last_traded_price?id=',
	reqType: 'get',
}
export const TOP_10_PLAYER_LIST = {
	url: 'players/top10',
	reqType: 'get',
}
export const RISING_STARS = {
	url: 'players/rising_stars',
	reqType: 'get',
}
export const ALL_ROUNDER = {
	url: 'players/allrounder',
	reqType: 'get',
}

export const HIT_MAN = {
	url: 'players/hitman',
	reqType: 'get',
}
export const BUY_ON_DIP = {
	url: 'players/buy_on_dip',
	reqType: 'get',
}
export const COMBINED_LEADERBOARD = {
	url: 'combined_leaderboard',
	reqType: 'get',
}

export const ALL_QUESTION_LIST_BY_CONTEST_ID = {
	url: 'parlay_question?contestID=',
	reqType: 'get',
}

export const GET_PORTFOLIO_BY_USER_ID = {
	url: 'get_portfolio',
	reqType: 'post',
}

export const GET_PARLAY_LEADERBOARD_BY_CONTEST_ID = {
	url: 'parlay_contest/leaderboard?contestID=',
	reqType: 'get',
}

export const CREATE_BUY_SELL_ORDER = {
	url: 'order',
	reqType: 'post',
}
export const TRANSACTION_ORDER = {
	url: 'transaction?user_id=',
	reqType: 'get',
}
export const GET_PROFILE = {
	url: 'get_profile',
	reqType: 'get',
}
export const UPDATE_PROFILE = {
	url: 'update_profile',
	reqType: 'post',
}

export const GET_MARKETPLACE_LIST = {
	url: 'player/marketplace',
	reqType: 'get',
}

export const GET_MARKETPALCE_LIST_BY_PLAYER_ID = {
	url: 'player?id=',
	reqType: 'get',
}
export const ADD_MONEY_TO_WALLET = {
	url: 'mint_dense_coin',
	reqType: 'post',
}

export const GET_RETURN_AMOUNT = {
	url: 'calculate_return',
	reqType: 'get',
}

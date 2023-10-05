import {
	CONTEST_LIST,
	CREATE_PARTICIPATION,
	MATCH_LIST,
	MATCH_SQUAD,
	PARLAY_CONTEST_LIST,
	PRIZE_DISTRIBUTION,
	CONTEST_PARTICIPATION,
	MATCH_LIST_BY_USER,
	CONTEST_LIST_BY_ID,
	GET_LEADERBOARD_BY_CONTEST_ID,
	GET_PROFILE_BY_USER_ID,
	CONTEST_PARTICIPATION_BY_CONTEST_ID,
	CONTEST_LIST_BY_USER_AND_MATCH,
	UPDATE_PARTICIPATION,
} from '../../api/URI/index'
import axiosWithApi from '../../hooks/axiosHelper/axiosWithApi'

export const getMatchList = () => {
	const url = MATCH_LIST.url
	return axiosWithApi({ url, method: MATCH_LIST.reqType })
}
export const getMatchListByUserId = (id) => {
	const url = MATCH_LIST_BY_USER.url + id
	return axiosWithApi({ url, method: MATCH_LIST_BY_USER.reqType })
}
export const getContestListByUserIdNMatchId = (matchId, userId) => {
	const url =
		CONTEST_LIST_BY_USER_AND_MATCH.url +
		'?match_id=' +
		matchId +
		'&user_id=' +
		userId
	return axiosWithApi({ url, method: CONTEST_LIST_BY_USER_AND_MATCH.reqType })
}
export const getContestList = (id) => {
	const url = CONTEST_LIST.url + id
	return axiosWithApi({ url, method: CONTEST_LIST.reqType })
}
export const getContestById = (userId, matchId) => {
	const url = CONTEST_LIST_BY_ID.url + userId + '&' + 'matchId=' + matchId
	return axiosWithApi({ url, method: CONTEST_LIST_BY_ID.reqType })
}

export const getPrizeDistribution = (id) => {
	const url = PRIZE_DISTRIBUTION.url + id
	return axiosWithApi({ url, method: PRIZE_DISTRIBUTION.reqType })
}
export const getSquadByMatchId = (id) => {
	const url = MATCH_SQUAD.url + id
	return axiosWithApi({ url, method: MATCH_SQUAD.reqType })
}
export const createParticipation = (teamObj) => {
	const url = CREATE_PARTICIPATION.url
	console.log(teamObj)
	return axiosWithApi({
		url,
		method: CREATE_PARTICIPATION.reqType,
		body: teamObj,
	})
}
export const updateParticipation = (teamObj) => {
	const url = UPDATE_PARTICIPATION.url
	return axiosWithApi({
		url,
		method: UPDATE_PARTICIPATION.reqType,
		body: teamObj,
	})
}
export const getParticipation = (id) => {
	const url = CONTEST_PARTICIPATION.url + id
	return axiosWithApi({ url, method: CONTEST_PARTICIPATION.reqType })
}

export const getParticipationbycontestid = (id) => {
	const url = CONTEST_PARTICIPATION_BY_CONTEST_ID.url + id
	return axiosWithApi({
		url,
		method: CONTEST_PARTICIPATION_BY_CONTEST_ID.reqType,
	})
}
export const getLeaderBoardByContestId = (contestId) => {
	const url = GET_LEADERBOARD_BY_CONTEST_ID.url + contestId
	return axiosWithApi({ url, method: GET_LEADERBOARD_BY_CONTEST_ID.reqType })
}
export const getPortfolioData = (getPortfolioObject) => {
	const url = GET_PROFILE_BY_USER_ID.url
	return axiosWithApi({
		url,
		method: GET_PROFILE_BY_USER_ID.reqType,
		body: getPortfolioObject,
	})
}

import { MATCH_LIST, PARLAY_CONTEST_LIST, QUESTION_LIST, ALL_QUESTION_LIST, ALL_QUESTION_LIST_BY_CONTEST_ID, CREATE_PARTICIPATION_PARLAY, GET_PARLAY_LEADERBOARD_BY_CONTEST_ID } from '../../api/URI/index'
import axiosWithApi from '../../hooks/axiosHelper/axiosWithApi'


// for calling all matches
export const getMatchList = () => {
	const url = MATCH_LIST.url
	return axiosWithApi({ url, method: MATCH_LIST.reqType })
}

// for calling parlay contest list for each match
export const getParlayContestList = (id) => {
	// for testing purposes only fetching all contest list of parlay contest
	const url = PARLAY_CONTEST_LIST.url+id
	return axiosWithApi({ url, method: PARLAY_CONTEST_LIST.reqType })
}

// for questions 
export const getQuestionList = () => {
	const url = QUESTION_LIST.url
	return axiosWithApi({ url, method: QUESTION_LIST.reqType })
}


export const getAllQuestionsList = () => {
	const url = ALL_QUESTION_LIST.url
	return axiosWithApi({ url, method: ALL_QUESTION_LIST.reqType })
}

export const getAllQuestionsListByContestId = (id) => {
	const url = ALL_QUESTION_LIST_BY_CONTEST_ID.url + id
	return axiosWithApi({ url, method: ALL_QUESTION_LIST_BY_CONTEST_ID.reqType })
}

export const createParticipationParlay = (contestObj) => {
	const url = CREATE_PARTICIPATION_PARLAY.url
	return axiosWithApi({ url, method: CREATE_PARTICIPATION_PARLAY.reqType, body: contestObj })
}

export const getParlayLeaderBoardByContestId = (contestId) => {
	const url = GET_PARLAY_LEADERBOARD_BY_CONTEST_ID.url + contestId
	return axiosWithApi({ url, method: GET_PARLAY_LEADERBOARD_BY_CONTEST_ID.reqType })
}

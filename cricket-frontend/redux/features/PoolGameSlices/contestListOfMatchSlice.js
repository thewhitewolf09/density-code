import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: {
		contestId: '',
		entryFee: '',
		poolSize: '',
		participantCount: '',
		startTime: '',
	},
}
const contestListOfMatchSlice = createSlice({
	name: 'contestListofMatch',
	initialState,
	reducers: {
		setContestListOfMatch: (state, action) => {
			state.value = action.payload
		},
	},
})
export const { setContestListOfMatch } = contestListOfMatchSlice.actions
export default contestListOfMatchSlice.reducer

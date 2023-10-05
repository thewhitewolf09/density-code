import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: {
		contestId: '',
		entryFee: '',
		poolSize: '',
		participantCount: '',
		startTime: '',
		contestType : ""
	},
}

const contestSlice = createSlice({
	name: 'selectedContest',
	initialState,
	reducers: {
		setSelectedContest: (state, action) => {
			state.value = action.payload
		},
	},
})
export const { setSelectedContest } = contestSlice.actions
export default contestSlice.reducer

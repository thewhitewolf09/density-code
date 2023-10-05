import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: {
		teamA: '',
		teamB: '',
		startTime: '',
		endTime:"",
		matchId: '',
	},
}
const matchSlice = createSlice({
	name: 'selectedMatch',
	initialState,
	reducers: {
		setSelectedMatch: (state, action) => {
			state.value = action.payload
		},
	},
})

export const { setSelectedMatch } = matchSlice.actions
export default matchSlice.reducer

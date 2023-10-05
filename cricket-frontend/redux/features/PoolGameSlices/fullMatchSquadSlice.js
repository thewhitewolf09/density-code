import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: [],
}

const fullMatchSquadSlice = createSlice({
	name: 'selectedMatchSquad',
	initialState,
	reducers: {
		setFullMatchSquad: (state, action) => {
			state.value = action.payload
		},
	},
})

export const { setFullMatchSquad } = fullMatchSquadSlice.actions
export default fullMatchSquadSlice.reducer

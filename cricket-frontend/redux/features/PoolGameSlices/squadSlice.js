import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: [],
}

const squadSlice = createSlice({
	name: 'selectedSquad',
	initialState,
	reducers: {
		setSelectedSquad: (state, action) => {
			state.value = action.payload
		},
	},
})

export const { setSelectedSquad } = squadSlice.actions
export default squadSlice.reducer

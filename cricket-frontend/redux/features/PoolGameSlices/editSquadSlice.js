import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: [],
}

const editSquadSlice = createSlice({
	name: 'selectedSquadToEdit',
	initialState,
	reducers: {
		setSelectedSquadToEdit: (state, action) => {
			state.value = action.payload
		},
	},
})

export const { setSelectedSquadToEdit } = editSquadSlice.actions
export default editSquadSlice.reducer

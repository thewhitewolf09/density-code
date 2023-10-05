import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: []
}
const playerSlice = createSlice({
	name: 'playerData',
	initialState,
	reducers: {
		setPlayerDetail: (state, action) => {
			state.value = action.payload
		},
	},
})

export const { setPlayerDetail } = playerSlice.actions
export default playerSlice.reducer

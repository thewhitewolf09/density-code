import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: [],
}

export const marketPlaceSelectedPlayer = createSlice({
	name: 'marketPlaceSelectedPlayer',
	initialState,
	reducers: {
		setMarketPlaceSelectedPlayer: (state, action) => {
			state.value = action.payload
		},
	},
})
export const { setMarketPlaceSelectedPlayer } =
	marketPlaceSelectedPlayer.actions
export default marketPlaceSelectedPlayer.reducer

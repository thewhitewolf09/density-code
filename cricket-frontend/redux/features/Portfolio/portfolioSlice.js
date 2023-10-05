import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: {
		invested_amount: 0,
		current_amount: 0,
		players: [],
	},
}
const portfolioSlice = createSlice({
	name: 'portfolioData',
	initialState,
	reducers: {
		setPorfolioData: (state, action) => {
			state.value = action.payload
		},
	},
})

export const { setPorfolioData } = portfolioSlice.actions
export default portfolioSlice.reducer

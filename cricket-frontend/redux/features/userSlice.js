import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	// value: '1a48afc3-7ca6-4323-a440-a33a17469bb9',
	// value: '761d6ec0-a8e7-49a9-8aca-9690a2c350f5',
	value: 'b07ccfd8-2e1e-4298-8118-24bb685e5fc3',
}

export const userSlice = createSlice({
	name: 'userId',
	initialState,
	reducers: {
		setUserId: (state, action) => {
			state.value = action.payload
		},
	},
})
export const { setUserId } = userSlice.actions
export default userSlice.reducer

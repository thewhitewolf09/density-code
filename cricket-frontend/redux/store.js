import { configureStore } from '@reduxjs/toolkit'
import contestSlice from './features/PoolGameSlices/contestSlice'
import matchSlice from './features/PoolGameSlices/matchSlice'
import fullMatchSquadSlice from './features/PoolGameSlices/fullMatchSquadSlice'
import squadSlice from './features/PoolGameSlices/squadSlice'
import userSlice from './features/userSlice'
import contestListOfMatchSlice from './features/PoolGameSlices/contestListOfMatchSlice'
import portfolioSlice from './features/Portfolio/portfolioSlice'
import editSquadSlice from './features/PoolGameSlices/editSquadSlice'
import marketplaceSlice from './features/MarketPlaceSlice/marketplaceSlice'
export const store = configureStore({
	reducer: {
		user: userSlice,
		currentContest: contestSlice,
		currentContestList: contestListOfMatchSlice,
		currentMatch: matchSlice,
		fullMatchSquad: fullMatchSquadSlice,
		selectedPlayers: squadSlice,
		portfolio: portfolioSlice,
		selectedPlayersToEdit: editSquadSlice,
		marketPlaceSelectedPlayer: marketplaceSlice,
	},
})

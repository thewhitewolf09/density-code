import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PlayerCard from '../PlayerCard'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setMarketPlaceSelectedPlayer } from '../../../redux/features/MarketPlaceSlice/marketplaceSlice'
import { RefreshControl } from 'react-native'
import { useState } from 'react'
import shortName from '../../../helpers/shortNameHelper'
// Got back to Normal

const FilterList = ({
	filteredData,
	scroller,
	tempComparePlayerData,
	setTempComparePlayerData,
	callApi,
}) => {
	const navigation = useNavigation()
	const [isLoading, setIsLoading] = useState(false)
	// setTempComparePlayerData([])
	const dispatch = useDispatch()
	return (
		<FlatList
			style={{ flex: 1 }}
			refreshControl={
				<RefreshControl refreshing={isLoading} onRefresh={callApi} />
			}
			removeClippedSubviews={true}
			windowSize={11}
			maxToRenderPerBatch={5}
			data={filteredData}
			renderItem={({ item }) => (
				<Pressable
					key={item.id}
					onPress={() => {
						if (scroller) {
							// dispatch(setMarketPlaceSelectedPlayer(item))
							console.log('dfdf')
							navigation.navigate('PlayerInfo', {
								playerId: item.id,
							})
						} else {
							if (tempComparePlayerData.includes(item)) {
								setTempComparePlayerData(
									tempComparePlayerData.filter((obj) => obj != item),
								)
							} else {
								setTempComparePlayerData([...tempComparePlayerData, item])
								console.log(tempComparePlayerData.length)
							}
						}
					}}
					style={{ flexDirection: 'row', justifyContent: 'center' }}
				>
					<PlayerCard
						key={item.id}
						name={item.name}
						position={item.type}
						nationality={shortName(item.nationality)}
						ipl_team={shortName(item.ipl_team)}
						checkbox={!scroller}
						backgroundColor={!scroller && tempComparePlayerData.includes(item)}
						imageUrl={item.image_url}
						price={item.player_stock_data.price}
						percentagechange={item.player_stock_data.one_hour}
					/>
				</Pressable>
			)}
			keyExtractor={(item) => item.id}
		/>
	)
}

export default FilterList

const styles = StyleSheet.create({})

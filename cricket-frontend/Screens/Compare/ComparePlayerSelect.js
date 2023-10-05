import {
	Dimensions,
	Image,
	Pressable,
	ScrollView,
	StyleSheet,
	View,
	FlatList,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import COLORS from '../../styles/Colors'

import HunterText from '../../components/UI/HunterText'
import WalletHeader from '../../components/UI/WalletHeader'
import PlayerCard from '../SearchPlayer/PlayerCard'
import { cancel } from '../../assets/assets'
import { useNavigation } from '@react-navigation/native'
import { getPlayerStatistics } from '../SearchPlayer/apiFunctions'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Compare2 = () => {
	const navigation = useNavigation()

	const [playerData, setPlayerData] = useState([])
	const [comparePlayer, setComparePlayer] = useState([])
	// Fetching Players Data from API
	useEffect(() => {
		getPlayerStatistics().then((response) => {
			setPlayerData(response.data)
		})
	}, [])
	return (
		<View>
			<LinearGradient
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				locations={[0, 0.2, 0.5, 0.6]}
				colors={['#6D48FF', '#f09bc066', '#724cfe33', '#6e49ff00']}
			>
				<WalletHeader />
				<View style={styles.sorch}>
					<Pressable
						style={styles.sort}
						onPress={() => {
							navigation.navigate('PlayerList'),
						}}
					>
						<Image source={cancel} />
						<View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
							<HunterText>Exit Compare</HunterText>
						</View>
					</Pressable>
					<Pressable
						style={styles.compare}
						onPress={() => {
							navigation.navigate('PlayerCompareScrollView')
						}}
					>
						<HunterText style={{ color: COLORS.white }}>Compare</HunterText>
					</Pressable>
				</View>
				<View style={{ marginVertical: height * 0.01, height: height * 0.85 }}>
					<FlatList
						data={playerData}
						renderItem={({ item, index }) => (
							<Pressable
								onPress={() => {
									if (item.id === index) {
										comparePlayer.push({ item })
									}
								}}
								style={{}}
							>
								<PlayerCard
									name={item.name}
									position={item.type}
									nationality={item.nationality}
									ipl_team={item.ipl_team}
									checkbox="true"
								/>
							</Pressable>
						)}
						keyExtractor={(item) => item.id}
					/>

				</View>
			</LinearGradient>
		</View>
	)
}

export default Compare2

const styles = StyleSheet.create({
	sorch: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: width * 0.05,
	},
	sort: {
		// flex: 4,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderRadius: 5,
		height: 0.05 * height,
		width: width * 0.4,
		// marginHorizontal: width * 0.04,
		backgroundColor: COLORS.whiteHalf,
		paddingHorizontal: width * 0.02,
		borderColor: COLORS.white,
		borderWidth: 2,
	},
	compare: {
		backgroundColor: COLORS.primary,
		height: 0.04 * height,
		alignItem: 'center',
		justifyContent: 'center',
		borderRadius: 36,
		paddingHorizontal: 10,
	},
})

// <Pressable
// 	onPress={() =>
// 		navigation.navigate(
// 			'PlayerInfo',
// 			{
// 				Player: item,
// 			},
// 			console.log('palyer card pressed'),
// 		)
// 	}
// 	key={item.id}{/* </Pressable> */}
// >

import {
	Dimensions,
	Image,
	Pressable,
	ScrollView,
	StyleSheet,
	View,
	FlatList,
} from 'react-native'
import React, { useState } from 'react'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

import COLORS from '../../styles/Colors'
import HunterText from '../../components/UI/HunterText'
import { LinearGradient } from 'expo-linear-gradient'
import WalletHeader from '../../components/UI/WalletHeader'
import BuySellButton from '../../components/UI/Buttons/BuySell'
import { cancel } from '../../assets/assets'
import { useNavigation } from '@react-navigation/native'
import FooterButtons from '../../components/UI/Buttons/FooterButtons'
import ComparePlayerStatsCard from './components/ComparePlayerStatsCard'
// Just to refresh the code so that it'll work
const PlayerCompareScrollView = (props) => {
	const selectedPlayerData = props.route.params.selectedPlayers
	const navigation = useNavigation()

	const [tradePlayer, setTradePlayer] = useState({})

	return (
		<View>
			<LinearGradient
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				locations={[0, 0.2, 0.5, 0.6]}
				colors={['#6D48FF', '#f09bc066', '#724cfe33', '#6e49ff00']}
			>
				<WalletHeader />
				<Pressable
					style={styles.sort}
					onPress={() => {
						navigation.navigate('PlayerList')
					}}
				>
					<Image source={cancel} />
					<View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
						<HunterText>Exit Compare</HunterText>
					</View>
				</Pressable>
				<View style={{ height: height * 0.72 }}>
					<ScrollView>
						{/* <ScrollView */}
						{/* // horizontal={true} */}
						{/* // showsHorizontalScrollIndicator={false} */}
						{/* // > */}
						<FlatList
							horizontal
							data={selectedPlayerData}
							renderItem={({ item }) => (
								<Pressable
									key={item.id}
									onPress={() => {
										setTradePlayer(item)
									}}
								>
									<ComparePlayerStatsCard
										name={item.name}
										position={item.type}
										nationality={item.nationality}
										ipl_team={item.ipl_team}
										backgroundColor={tradePlayer == item}
										imageURL={item.image_URL}
									/>
								</Pressable>
							)}
							keyExtractor={(item) => item.id}
						/>
					</ScrollView>
					{/* </ScrollView> */}
				</View>
			</LinearGradient>
			<View style={{ marginTop: height * 0.11 }}>
				<FooterButtons
					leftVisible={true}
					leftTitle={'Sell'}
					rightTitle={'Buy'}
					checked={true}
					leftPress={() =>
						navigation.navigate('BuySell', { Player: tradePlayer })
					}
					rightPress={() =>
						navigation.navigate('BuySell', { Player: tradePlayer })
					}
				/>
			</View>
		</View>
	)
}

export default PlayerCompareScrollView

const styles = StyleSheet.create({
	sort: {
		// flex: 4,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderRadius: 5,
		height: 0.05 * height,
		width: width * 0.4,
		marginHorizontal: width * 0.03,
		backgroundColor: COLORS.whiteHalf,
		paddingHorizontal: width * 0.02,
		marginTop: -20,
		marginBottom: 10,
		borderColor: COLORS.white,
		borderWidth: 2,
	},
})

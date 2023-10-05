import {
	Dimensions,
	Image,
	Pressable,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { LinearGradient } from 'expo-linear-gradient'
import PlayerCard from '../SearchPlayer/PlayerCard'
import { useNavigation } from '@react-navigation/native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

import HunterText from '../../components/UI/HunterText'
import FilterBottomModalSheets from '../SearchPlayer/FilterBottomModalSheets'
import Cross from '..//../assets/Images/Svg/Cross'
import SortBottomModalSheets from '../SearchPlayer/SortBottomModalSheets'
import WalletHeader from '../../components/UI/WalletHeader'
import { filter, vectorPNG } from '../../assets/assets'

const PlayerList = () => {
	const playersArray = ['A', 'A', 'A', 'A']

	const navigation = useNavigation()

	const [playerData, setPlayerData] = useState([])

	//to set filter state
	const [filterNum, setFilter] = useState(0)

	//to set sort state
	const [sort, setSort] = useState(0)

	return (
		<SafeAreaView style={{ height: '100%' }}>
			<LinearGradient
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				locations={[0, 0.2, 0.5, 0.6]}
				colors={['#6D48FF', '#f09bc066', '#724cfe33', '#6e49ff00']}
			>
				{/* Header View */}
				<WalletHeader />
				{/* <View style={styles.searchdiv}>
            <AntDesign name="search1" size={30} color="black" />
            <TextInput style={styles.searching} placeholder="Search" />
          </View> */}
				<ScrollView>
					{/* Search View */}

					{/* Sorting and Searching View */}
					<View style={styles.sorch}>
						<ScrollView
							horizontal={true}
							showsHorizontalScrollIndicator={false}
						>
							<Pressable style={styles.sort} onPress={() => setSort(1)}>
								<View style={{}}>
									<HunterText style={{ fontWeight: '500' }}>
										Sort by:
									</HunterText>
									<HunterText> Trending </HunterText>
								</View>
								<MaterialIcons name="sort" color="black" size={20} />
							</Pressable>
							<Pressable style={styles.filter} onPress={() => setFilter(1)}>
								<HunterText>All rounder</HunterText>
								<Image source={filter} />
							</Pressable>
							<Pressable style={styles.later}>
								{/* <HunterText>All rounder</HunterText> */}
								<Image source={vectorPNG} />
							</Pressable>
							<Pressable style={styles.later}>
								{/* <HunterText>All rounder</HunterText> */}
								{/* <Image source={require("../../assets/Images/Vector.png")} /> */}
								<AntDesign name="search1" size={30} color="black" />
							</Pressable>
						</ScrollView>
					</View>
					{/* Player List View */}
					<View>
						<PlayerCard arrow="true" />
						<PlayerCard arrow="true" />
						<PlayerCard arrow="true" />
						<PlayerCard arrow="true" />
						<PlayerCard arrow="true" />
						<PlayerCard arrow="true" />
						<PlayerCard arrow="true" />
						<PlayerCard arrow="true" />
						<PlayerCard arrow="true" />
					</View>
				</ScrollView>
			</LinearGradient>

			{/* for filter window  */}

			<View
				style={
					filterNum === 0
						? styles.filter_background_container_0
						: styles.filter_background_container_100
				}
			>
				<View style={styles.filter_container}>
					<View style={styles.filter_heading_container}>
						<Text style={styles.filter_heading}>Filter</Text>
						<Pressable
							style={styles.filter_heading}
							onPress={() => {
								setFilter(0)
							}}
						>
							<Cross />
						</Pressable>
					</View>
					<FilterBottomModalSheets />
				</View>
			</View>

			{/* for sort window */}
			<View
				style={
					sort === 0
						? styles.sort_background_container_0
						: styles.sort_background_container_100
				}
			>
				<View style={styles.sort_container}>
					<View style={styles.sort_heading_container}>
						<Text style={styles.sort_heading}>Sort by</Text>
						<Pressable style={styles.sort_heading} onPress={() => setSort(0)}>
							<Cross />
						</Pressable>
					</View>
					<SortBottomModalSheets />
				</View>
			</View>
		</SafeAreaView>
	)
}

export default PlayerList

const styles = StyleSheet.create({
	upperContainer: {
		borderBottomLeftRadius: 32,
		borderBottomRightRadius: 32,
	},
	hunter: {
		flex: 5,
		fontSize: 40,
		fontWeight: '400',
		letterSpacing: 2.9,
		paddingTop: 0.02 * height,
	},
	wallet: {
		display: 'flex',
		flex: 1,
		flexDirecton: 'row',
		backgroundColor: 'lightgray',
		marginRight: 0.02 * width,
		marginTop: 0.02 * height,
	},
	searchdiv: {
		marginVertical: 15,
		marginHorizontal: 15,
		flexDirection: 'row',
		backgroundColor: 'white',
		borderRadius: 10,
		alignItems: 'center',
		paddingHorizontal: width * 0.03,
	},
	searching: {
		padding: height * 0.01,
		borderRadius: 10,
		width: 0.8 * width,
	},
	sorch: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	sort: {
		flex: 4,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		borderRadius: 5,
		height: 0.05 * height,
		width: width * 0.5,
		marginHorizontal: width * 0.04,
		backgroundColor: 'white',
		paddingHorizontal: width * 0.02,
	},
	filter: {
		flex: 3,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		width: 0.4 * width,
		height: 0.05 * height,
		borderRadius: 5,
		marginHorizontal: width * 0.04,
		paddingHorizontal: width * 0.03,
		backgroundColor: 'white',
	},
	later: {
		flex: 3,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		//   width: 0.4*width,
		height: 0.05 * height,
		borderRadius: 5,
		marginHorizontal: width * 0.04,
		paddingHorizontal: width * 0.03,
		backgroundColor: 'white',
	},

	filter_background_container_0: {
		display: 'none',
	},

	filter_background_container_100: {
		display: 'flex',
		height: '100%',
		backgroundColor: 'rgba(0,0,0,0.8)',
		position: 'absolute',
		bottom: 0,
		width: '100%',
	},

	filter_container: {
		position: 'absolute',
		width: '100%',
		bottom: 0,
		height: 500,
		backgroundColor: '#ffffff',
		borderTopLeftRadius: 32,
		borderTopRightRadius: 32,
	},
	filter_heading_container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 32,
		paddingTop: 30,
		paddingRight: 30,
		height: 80,
		borderBottomColor: '#EAE5F4',
		borderBottomWidth: 1,
	},
	filter_heading: {
		fontSize: 20,
		fontWeight: '700',
		lineHeight: 30,
	},

	sort_background_container_0: {
		display: 'none',
	},

	sort_background_container_100: {
		display: 'flex',
		height: '100%',
		backgroundColor: 'rgba(0,0,0,0.8)',
		position: 'absolute',
		bottom: 0,
		width: '100%',
	},
	sort_container: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: 433,
		backgroundColor: '#ffffff',
		borderTopLeftRadius: 32,
		borderTopRightRadius: 32,
	},
	sort_heading_container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 32,
		paddingTop: 30,
		paddingRight: 30,
		height: 80,
		borderBottomColor: '#EAE5F4',
		borderBottomWidth: 1,
	},
	sort_heading: {
		fontSize: 20,
		fontWeight: '700',
		lineHeight: 30,
	},
})

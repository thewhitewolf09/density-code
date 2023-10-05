import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Image,
	Dimensions,
	FlatList,
	ScrollView,
} from 'react-native'
import React from 'react'
import WalletHeader from '../components/UI/WalletHeader'

import { LinearGradient } from 'expo-linear-gradient'

// Importing components
import WatchListSerach from './components/WatchListSerach'
import SortAndFilter from './components/SortAndFilter'
import WatchListPlayerCard from './components/WatchListPlayerCard'
import { playerData } from './components/data'

const { width, height } = Dimensions.get('window')

const Watchlist = () => {
	return (
		<SafeAreaView style={styles.container}>
			<LinearGradient
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				locations={[0, 0.2, 0.5, 0.6]}
				colors={['#6D48FF', '#f09bc066', '#724cfe33', '#6e49ff00']}
			>
				<WalletHeader />
				<View>
					<WatchListSerach />
				</View>
				<View>
					<SortAndFilter />
				</View>
				{/* I'm fed up of running this code again and again. */}
				<FlatList
					data={playerData}
					renderItem={({ item }) => (
						<WatchListPlayerCard
							name={item.player_name}
							playerType={item.player_type}
							stockPrice={item.stock_price}
							stockChange={item.stock_change}
						/>
					)}
					keyExtractor={(item) => item.id}
				/>
			</LinearGradient>
		</SafeAreaView>
	)
}

export default Watchlist

const styles = StyleSheet.create({
	container: {},
})

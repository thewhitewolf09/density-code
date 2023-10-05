import { Dimensions, Image, StyleSheet, View } from 'react-native'
import React from 'react'
import HunterText from '../../../components/UI/HunterText'
import { pool_player_image } from '../../../assets/assets'
const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height

function LeaderboardCard({ rank, id, name, score }) {
	return (
		// <SafeAreaView style={styles.upperContainer}>

		<View
			style={{
				flexDirection: 'row',
				height: sHeight * 0.07,
				alignItems: 'center',
				paddingHorizontal: sWidth * 0.04,
				backgroundColor: 'white',
				borderBottomColor: 'rgba(109, 72, 255, 0.1)',
				borderBottomWidth: 1,
			}}
		>
			<View style={{ flexDirection: 'row', flex: 1 }}>
				{/* <Image source={pool_player_image} style={{ width: 32, height: 32 }} /> */}
				<HunterText style={{ width: '12%' }}>#{rank}</HunterText>
				<View style={{ width: '80%' }}>
					<HunterText
						style={{
							fontSize: 12,
							alignSelf: 'center',
							paddingHorizontal: 10,
						}}
					>
						{name}
					</HunterText>
					<HunterText style={{ fontSize: 8 }}>{id}</HunterText>
				</View>
				<HunterText style={{ fontSize: 12 }}>{score}</HunterText>
			</View>
		</View>

		// </SafeAreaView>
	)
}

const styles = StyleSheet.create({
	upperContainer: {
		backgroundColor: '#5F40DD4D',
		paddingTop: 0,
		paddingBottom: 1,
		borderColor: 'red',
		borderBottomWidth: 1,
		marginVertical: 200,
	},
})

export default LeaderboardCard

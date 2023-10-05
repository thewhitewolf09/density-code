import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'
import HunterText from '../../../components/UI/HunterText'
const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height

function LeaderWinCard() {
	return (
		// <SafeAreaView style={styles.upperContainer}>

		<View
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				flexDirection: 'row',
				height: sHeight * 0.07,
				alignItems: 'center',
				paddingHorizontal: sWidth * 0.07,
				backgroundColor: 'white',
				borderBottomColor: 'rgba(109, 72, 255, 0.1)',
				borderBottomWidth: 1,
			}}
		>
			<View>
				<HunterText style={{ fontSize: 12, fontWeight: '600', Color: 'black' }}>
					Peter Thortan
				</HunterText>
			</View>
			{/* <View><HunterText style={{ fontSize:12 , fontWeight:'600' , Color:'black' }}>#1</HunterText></View> */}
			<View style={{ padding: sWidth * 0.01 }}>
				<HunterText>T1</HunterText>
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

export default LeaderWinCard

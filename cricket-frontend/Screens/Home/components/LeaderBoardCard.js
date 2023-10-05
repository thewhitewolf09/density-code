import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HunterText from '../../../components/UI/HunterText'
const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height

function LeaderBoardCard( { name } ) {
	return (
		<View style={styles.outerView}>
			<View style={styles.serialNumber}>
				<View>
					<Text style={styles.numText}>1</Text>
				</View>
			</View>

			<View style={styles.NameAndDetails}>
				<View style={styles.name}>
					<Text style={styles.namText}>{name}</Text>
				</View>
				<View style={styles.details}>
					<View style={styles.debox}>
						<Text style={styles.deboxHeading}>INVESTED</Text>
						<Text style={styles.deboxSubHeading}>₹ 45.5k</Text>
					</View>
					<View style={styles.debox}>
						<Text style={styles.deboxHeading}>Current Value</Text>
						<Text style={styles.deboxSubHeading}>₹ 80.8k</Text>
					</View>
					<View style={styles.debox}>
						<Text style={styles.deboxHeading}>% Change</Text>

						<Text style={[styles.deboxSubHeading, { color: 'green' }]}>
							95%
						</Text>
					</View>
				</View>
			</View>

			<View style={styles.nextMenu}>
				<Text style={styles.MenuText}>{'>'}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	upperContainer: {
		backgroundColor: '#5F40DD4D',
		paddingTop: 0,
		paddingBottom: 1,
		borderColor: 'red',
		borderWidth: 2,
	},
	outerView: {
		display: 'flex',
		flexDirection: 'row',
		// borderColor: 'black',
		// borderWidth:2,
		paddingLeft: '1%',
		paddingRight: '1%',
		height: 100,
		paddingTop: '2%',
		paddingBottom: '2%',
		backgroundColor: 'white',
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 3,
	},
	serialNumber: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		// borderColor: 'blue',
		// borderWidth:2,
		width: '10%',
		height: '45%',
		marginTop: '5%',
		marginBottom: '5%',
		marginRight: '1%',
		backgroundColor: '#F0EEF9',
		borderRadius: 21,
	},
	NameAndDetails: {
		display: 'flex',
		flexDirection: 'column',
		// borderColor: 'yellow',
		// borderWidth:2 ,
		width: '70%',
		marginLeft: '2%',
		justifyContent: 'space-between',
	},
	details: {
		// borderColor: 'black',
		// borderWidth:1 ,
		dispaly: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: '3%',
	},
	nextMenu: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		// borderColor: 'blue',
		// borderWidth:2,
		width: '15%',
	},
	numText: {
		// borderColor: 'yellow',
		// borderWidth:2,
		color: 'black',
		fontWeight: 'bold',
		fontSize: 15,
	},
	namText: {
		color: '#0B0617',
		fontWeight: 'bold',
		fontSize: 16,
	},
	debox: {
		// borderColor: 'yellow',
		// borderWidth:2,
	},
	deboxHeading: {
		color: 'grey',
		fontSize: 10,
		fontWeight: '300',
	},
	deboxSubHeading: {
		color: '#0B0617',
		fontSize: 14,
		// fontWeight: 'bold',
		fontWeight: '400',
	},
	MenuText: { fontSize: 20, fontWeight: 'bold' },
})

export default LeaderBoardCard

import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'
import HunterText from '../../../components/UI/HunterText'
import NumberToWord from '../../../helpers/NumberToWord'
import HunterBoldText from '../../../components/UI/HunterBoldText'
import HunterSemiBoldText from '../../../components/UI/HunterSemiBoldText'
const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height

function IplLeaderCard({ playerName, user_winnings, index }) {
	let winnings = NumberToWord(user_winnings)
	let name = playerName.substring(0, 15) + '...'
	return (
		// <View style={styles.upperContainer}>
		<View style={styles.outerView}>
			<View style={styles.serialNumber}>
				<HunterSemiBoldText style={styles.numText}>
					{index + 1}
				</HunterSemiBoldText>
			</View>

			<View style={styles.NameAndDetails}>
				<View style={styles.name}>
					<HunterText style={styles.namText}>{name}</HunterText>
				</View>
			</View>

			<View style={styles.nextMenu}>
				<View style={styles.debox}>
					<HunterText style={styles.deboxHeading}>Earnings</HunterText>

					<HunterSemiBoldText style={styles.deboxSubHeading}>
						₹ {winnings}
					</HunterSemiBoldText>
				</View>
			</View>
		</View>
		// </View>
	)
}

const styles = StyleSheet.create({
	upperContainer: {
		backgroundColor: '#5F40DD4D',
		paddingTop: 100,
		paddingBottom: 1,
		borderColor: 'red',
		borderWidth: 2,
	},
	outerView: {
		display: 'flex',
		flexDirection: 'row',
		borderColor: '#EAE5F4',
		borderBottomWidth: 1,
		paddingLeft: '1%',
		paddingRight: '1%',
		height: 100,
		paddingTop: '2%',
		paddingBottom: '2%',
		backgroundColor: 'white',
		// borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
		// marginVertical: 3,
	},
	serialNumber: {
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		// borderColor: 'blue',
		// borderWidth:2,
		width: '10%',

		// height: "45%",
		// marginTop: "5%",
		// marginBottom: "5%",
		marginRight: '1%',
		// backgroundColor: "#F0EEF9",
		// borderRadius: 21,
	},
	NameAndDetails: {
		display: 'flex',
		flex: 7,
		flexDirection: 'column',
		// borderColor: 'yellow',
		// borderWidth:2 ,
		width: '60%',
		marginLeft: '2%',
		justifyContent: 'space-between',
	},

	nextMenu: {
		display: 'flex',
		flex: 4,
	},
	numText: {
		color: 'black',
		fontSize: 24,
	},
	namText: {
		color: '#0B0617',
		fontWeight: '500',
		fontSize: 16,
	},
	debox: {
		// borderColor: 'yellow',
		// borderWidth: 2,
		alignItems: 'flex-start',
	},
	deboxHeading: {
		color: 'grey',
		fontSize: 10,
		fontWeight: '300',
	},
	deboxSubHeading: {
		// color: '#0B0617',
		fontSize: 20,
		color: '#019453',
	},
	MenuText: { fontSize: 20, fontWeight: 'bold' },
})

export default IplLeaderCard

{
	/* <View style={styles.details}>
          <View style={styles.debox}>
            <HunterText style={styles.deboxHeading}>INVESTED</HunterText>
            <HunterText style={styles.deboxSubHeading}>₹ 45.5k</HunterText>
          </View>
          <View style={styles.debox}>
            <HunterText style={styles.deboxHeading}>Current Value</HunterText>
            <HunterText style={styles.deboxSubHeading}>₹ 80.8k</HunterText>
          </View>
          <View style={styles.debox}>
            <HunterText style={styles.deboxHeading}>% Change</HunterText>

            <HunterText style={styles.deboxSubHeading} style={{ color: "green" }}>
              95%
            </HunterText>
          </View>
        </View> */
}

import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { vkSmall } from '../../assets/assets'
import appColors from '../../styles/Colors'
import HunterBoldText from '../../components/UI/HunterBoldText'
import HunterText from '../../components/UI/HunterText'
import PercentageChange from '../../components/UI/PercentageChange'

const { width, height } = Dimensions.get('window')

const WatchListPlayerCard = ({ name, playerType, stockPrice, stockChange }) => {
	return (
		<View style={styles.mainContainer} >
			<View style={styles.container}>
				<View style={{ flexDirection: 'row' }}>
					<View
						style={{
							backgroundColor: appColors.secondaryDark,
							borderRadius: 50,
                            borderWidth: 1,
						}}
					>
						<Image
							source={vkSmall}
							style={{
								height: height * 0.06,
								width: 0.06 * height,
								borderRadius: 30,
							}}
						/>
					</View>
					<View style={{marginHorizontal: 10,borderWidth: 1,}} >
						<HunterBoldText>{name}</HunterBoldText>
						<HunterText>{playerType}</HunterText>
					</View>
				</View>
				<View style={{borderWidth: 1,}}>
					<Text>Graph</Text>
				</View>
				<View>
					<HunterBoldText>₹{stockPrice}</HunterBoldText>
					<PercentageChange value={stockChange} />
				</View>
			</View>
		</View>
	)
}

export default WatchListPlayerCard

const styles = StyleSheet.create({
    // mainContainer: {
    //     elevation: 10,
    // },
	container: {
		flexDirection: 'row',
        justifyContent: 'space-between',
		height: 0.09 * height,
		alignItems: 'center',
		paddingHorizontal: 10,
		borderRadius: 12,
		marginHorizontal: 10,
		backgroundColor: appColors.white,
        marginVertical: 10,
	},
})

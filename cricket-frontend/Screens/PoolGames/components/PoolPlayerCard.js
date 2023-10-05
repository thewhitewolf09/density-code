import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../styles/Colors'
import HunterSemiBoldText from '../../../components/UI/HunterSemiBoldText'
import HunterText from '../../../components/UI/HunterText'
import { addIconImage, removeIconImage } from '../../../assets/assets'
import screenUtils from '../../../constants/Dimensions'
import shortName from '../../../helpers/shortNameHelper'
const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height
// console.log(sHeight)
const PoolPlayerCard = ({
	name,
	selPercentage,
	imageSource,
	points,
	creditScore,
	selected,
	teamName,
}) => {
	return (
		<View
			style={[
				styles.poolPlayerCardContainer,
				{ backgroundColor: selected ? '#FFF4E1' : undefined },
			]}
		>
			<View style={{ width: '50%', flexDirection: 'row' }}>
				<Image
					source={{
						uri: imageSource,
					}}
					style={{
						alignSelf: 'center',
						height: screenUtils.width / 8.9,
						width: screenUtils.width / 8.9,
					}}
				/>
				<View
					style={{
						alignSelf: 'center',
						marginHorizontal: sWidth / 33.3,
						flexDirection: 'row',
						flex: 1,
					}}
				>
					<HunterSemiBoldText
						style={{
							fontSize: screenUtils.width / 28.5,
							flexWrap: 'wrap',
						}}
					>
						{name}
					</HunterSemiBoldText>
					<HunterSemiBoldText
						style={{
							fontSize: screenUtils.width / 60,
							marginHorizontal: 4,
						}}
					>
						{shortName(teamName)}
					</HunterSemiBoldText>
				</View>
			</View>
			<View style={{ width: '20%', alignSelf: 'center' }}>
				<HunterText
					style={{ fontSize: screenUtils.width / 28.5, textAlign: 'center' }}
				>
					{points}
				</HunterText>
			</View>
			<View
				style={{
					width: '20%',
					alignSelf: 'center',
				}}
			>
				<HunterText
					style={{ fontSize: screenUtils.width / 28.5, textAlign: 'center' }}
				>
					{creditScore}
				</HunterText>
			</View>
			<View
				style={{
					alignSelf: 'center',
					width: '10%',
				}}
			>
				<Image
					source={selected ? removeIconImage : addIconImage}
					style={{ width: sWidth / 11.11, height: sWidth / 11.11 }}
				/>
			</View>
		</View>
	)
}

export default PoolPlayerCard

const styles = StyleSheet.create({
	poolPlayerCardContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: screenUtils.height / 71,
		borderBottomWidth: 1,
		borderBottomColor: Colors.secondaryDark,
		paddingHorizontal: sWidth * 0.04,
	},
})

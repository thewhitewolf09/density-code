import { Dimensions, Image, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import HunterText from '../../../components/UI/HunterText'
import Colors from '../../../styles/Colors'
import screenUtils from '../../../constants/Dimensions'
const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height

const CapViceCapCard = ({
	imageSource,
	vcPer,
	cPer,
	points,
	playerId,
	c,
	setC,
	vc,
	setVC,
	selectedC,
	selectedVC,
	name,
}) => {
	const handleVc = (id) => {
		if (vc === id) {
			setVC(undefined)
		} else {
			if (c == id) setC(undefined)
			setVC(id)
		}
	}
	const handleC = (id) => {
		if (c === id) {
			setC(undefined)
		} else {
			if (vc == id) setVC(undefined)
			setC(id)
		}
	}
	return (
		<View style={styles.poolPlayerCardContainer}>
			<View style={{ width: '25%', flexDirection: 'row' }}>
				<Image
					source={{ uri: imageSource }}
					style={{
						alignSelf: 'center',
						width: screenUtils.width / 6.66,
						height: screenUtils.width / 6.66,
					}}
				/>
			</View>
			<View style={{ width: '45%', alignSelf: 'center' }}>
				<HunterText>{name}</HunterText>
				<HunterText>{points} pts</HunterText>
			</View>
			<View style={styles.cVcColumn}>
				<View>
					<Pressable
						onPress={() => handleC(playerId)}
						style={[
							styles.cVcContainer,
							selectedC && { backgroundColor: Colors.hunter, elevation: 10 },
						]}
					>
						<HunterText
							style={[styles.cVc, selectedC && { color: Colors.white }]}
						>
							{!selectedC ? 'C' : '2x'}
						</HunterText>
					</Pressable>
					<HunterText style={{ color: '#737373', textAlign: 'center' }}>
						{cPer}%
					</HunterText>
				</View>
			</View>
			<View style={styles.cVcColumn}>
				<View>
					<Pressable
						onPress={() => handleVc(playerId)}
						style={[
							styles.cVcContainer,
							selectedVC && { backgroundColor: Colors.hunter, elevation: 10 },
						]}
					>
						<HunterText
							style={[styles.cVc, selectedVC && { color: Colors.white }]}
						>
							{!selectedVC ? 'VC' : '1.5x'}
						</HunterText>
					</Pressable>
					<HunterText
						style={{ color: '#737373', textAlign: 'center', marginTop: 2 }}
					>
						{vcPer}%
					</HunterText>
				</View>
			</View>
		</View>
	)
}

export default CapViceCapCard

const styles = StyleSheet.create({
	poolPlayerCardContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: sHeight / 70,
		borderBottomWidth: 1,
		borderBottomColor: Colors.secondaryDark,
		paddingHorizontal: 16,
	},
	cVcContainer: {
		borderRadius: 20,
		backgroundColor: '#6d48ff0f',
		borderWidth: 1,
		borderColor: '#737373',
		width: 40,
		height: 40,
		justifyContent: 'center',
	},
	cVc: {
		color: '#737373',
		alignSelf: 'center',
	},
	cVcColumn: {
		width: '15%',
		alignSelf: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
	},
})

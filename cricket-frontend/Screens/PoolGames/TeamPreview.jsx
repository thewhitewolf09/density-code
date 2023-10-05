import React, { useMemo } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import {
	BottomSheetModal,
	BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'
import { pitch, sampleUser } from '../../assets/assets'
import Cross from '../../assets/Images/Svg/Cross'
import appColors from '../../styles/Colors'
import screenUtils from '../../constants/Dimensions'
import HunterText from '../../components/UI/HunterText'

const TeamPreview = ({ allPlayers, previewRef, _handleSheetChanges }) => {
	const players = allPlayers?.filter((player)=>player.type === "Keeper")
	const players1 = allPlayers?.filter((player)=>player.type === "Batsman")
	const players2 = allPlayers?.filter((player)=>player.type === "AllRounder")
	const players3 = allPlayers?.filter((player)=>player.type === "Bowler")
	const snapPoints = useMemo(() => {
		if (
			players?.length >= 4 ||
			players1?.length >= 4 ||
			players2?.length >= 4 ||
			players3?.length >= 4
		) {
			return ['95%']
		}
		return ['95%']
	}, [])
	return (
		<BottomSheetModalProvider>
			<BottomSheetModal
				ref={previewRef}
				style={styles.modalSheetStyle}
				snapPoints={snapPoints}
				onChange={_handleSheetChanges}
			>
				<View style={styles.contentContainer}>
					<View style={styles.headingView}>
						<HunterText style={styles.h1}>Team Preview</HunterText>
						<Pressable
							style={styles.autoBuy_heading}
							onPress={() => {
								previewRef.current?.dismiss()
							}}
						>
							<Cross />
						</Pressable>
					</View>
					<View style={styles.pitchView}>
						<View style={styles.playerView}>
							<PlayerSection title={'WICKET KEEPER'} players={players} />
							<PlayerSection title={'BATTER'} players={players1} />
							<PlayerSection title={'ALL ROUNDER'} players={players2} />
							<PlayerSection title={'BOWLER'} players={players3} />
							<View></View>
						</View>
						<Image source={pitch} style={styles.pitchImage} />
					</View>
				</View>
			</BottomSheetModal>
		</BottomSheetModalProvider>
	)
}

const PlayerSection = ({ title, players }) => {
	return (
		<View style={styles.playerSection}>
			<Text style={{ ...styles.h3, paddingVertical: 15 }}>{title}</Text>
			<View style={styles.playerSectionImages}>
				{players && players?.length > 0 ? (
					players?.map((v, i) => {
						return (
							<PlayerBadge
								key={i}
								name={v.name}
								picture={sampleUser}
								amount={'12Cr'}
							/>
						)
					})
				) : (
					<></>
				)}
			</View>
		</View>
	)
}

const PlayerBadge = ({ name, picture, amount }) => {
	return (
		<View style={styles.playerBadge}>
			<Image style={styles.playerImage} source={picture} />
			<View style={styles.playerLabelInfo}>
				<View style={styles.playerLabelName}>
					<Text style={styles.h5}>{name}</Text>
				</View>
				<Text style={styles.subtitle}>{amount}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'grey',
	},
	modalSheetStyle: {},
	contentContainer: {
		flex: 1,
	},
	headingView: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingBottom: 15,
	},

	pitchView: {
		alignItems: 'center',
	},
	pitchImage: {
		width: '100%',
		height: '100%',
		resizeMode: 'stretch',
		zIndex: -1,
	},
	playerView: {
		position: 'absolute',
	},
	
	playerSection: {
		display: 'flex',
		alignSelf: 'center',
		justifyContent: 'center',
		width: '100%',
	},
	playerSectionImages: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'center',
		width: '100%',
	},
	playerBadge: {
		alignItems: 'center',
		paddingHorizontal: screenUtils.width * 0.05,
	},
	playerImage: {
		width: screenUtils.width * 0.12,
		height: screenUtils.width * 0.12,
	},
	playerLabelInfo: {
		flexDirection: 'column',
		alignItems: 'center',
		top: -15,
	},
	playerLabelName: {
		backgroundColor: appColors.primary,
		color: appColors.white,
		paddingVertical: 3,
		paddingHorizontal: 7,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 7,
		width: 90,
		flexDirection: 'row',
	},
	h1: {
		fontSize: 20,
		lineHeight: 30,
	},
	h3: {
		fontSize: 13,
		textAlign: 'center',
		color: appColors.white,
	},
	h5: {
		fontSize: 12,
		textAlign: 'center',
		color: appColors.white,
	},
	subtitle: {
		fontSize: 14,
		lineHeight: 24,
		color: appColors.white,
	},
})

export default TeamPreview

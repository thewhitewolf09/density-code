import { Pressable, ScrollView, StyleSheet, View  , Dimensions } from 'react-native'
import React from 'react'
import HunterText from '../../../components/UI/HunterText'
import appColors from '../../../styles/Colors'
const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height

const PlayerTypeScroll = ({setBtnIndex} , {active}) => {
	const playerTypes = [
		'Top 10',
		'Rising star',
		'All rounder',
		'Hitman',
		'Buy on dip',
	]
	return (
		<ScrollView horizontal showsHorizontalScrollIndicator={false}>
			{playerTypes.map((player, index) => (
				<Pressable onPress={() => {setBtnIndex(index);  console.log("btnindexis")}} key={index} 
				style={
				{
					backgroundColor: active ? appColors.primary : appColors.white,
					
					borderColor: appColors.secondaryDark,
					borderWidth: 1,
					paddingHorizontal: sWidth / 40,
					marginHorizontal:sWidth / 40,
					// paddingVertical: sHeight / 170,
				}
			}
				
				
				
				 >
					<View
						key={player}
						
						style={{
							borderRadius: 14,
							padding: 10,
							backgroundColor: '#ffffff80',
							marginHorizontal: 9,
						}}
					>
						<HunterText style={{ fontSize: 16 , 
						color: !active ? appColors.primary : appColors.secondary}}>{player}</HunterText>
					</View>
				</Pressable>
			))}
		</ScrollView>
	)
}

export default PlayerTypeScroll

const styles = StyleSheet.create({})

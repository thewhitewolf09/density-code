import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
// import HunterBoldText from '../../'
import HunterText from '../../components/UI/HunterText'
import { filter, sortVector } from '../../assets/assets'
import appColors from '../../styles/Colors'

const { width, height } = Dimensions.get('window')
// eposignepognep

const SortAndFilter = () => {
	// const variable = 'variable'; 
  return (
    <View style={styles.container1}>
					<View
						style={{
							flexDirection: 'row',
							height: height * 0.05,
							alignItems: 'center',
							padding: 5,
							justifyContent: 'space-around',
                            flex: 4,
                            marginHorizontal: 10,
                            borderRadius: 9,
                            backgroundColor: appColors.whiteHalf,
						}}
                        >
						<View style={{ flexDirection: 'row' }}>
							<HunterText style={{ color: appColors.primary }}>
								Sort by:
							</HunterText>
							<Text>Trending</Text>
						</View>
						<View>
							<Image source={sortVector} />
						</View>
					</View>
					<View
						style={{
                            flexDirection: 'row',
							height: height * 0.05,
							alignItems: 'center',
							padding: 5,
							justifyContent: 'space-around',
                            flex: 3,
                            marginHorizontal: 10,
                            borderRadius: 9,
                            backgroundColor: appColors.whiteHalf,
						}}
					>
						<View>
							<Text>All Rounder</Text>
						</View>
						<View>
							<Image source={filter} />
						</View>
					</View>
				</View>
  )
}

export default SortAndFilter

const styles = StyleSheet.create({
    container1: {
		flexDirection: 'row',
		justifyContent: 'space-around',
        marginVertical: 10,
    },
})
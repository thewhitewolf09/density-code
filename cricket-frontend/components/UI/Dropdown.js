import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	Image,
} from 'react-native'
import React, { useState } from 'react'
import {
	arrowDownwardIos,
	arrowForward,
} from '../../assets/assets'
import { TouchableOpacity } from 'react-native-gesture-handler'
import appColors from '../../styles/Colors'
const { width, height } = Dimensions.get('window')

const Dropdown = () => {
	const [selected, setSelected] = useState(true)
	return (
		<View>
		{/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> */}
			{selected && (
				<View
					style={{
						flexDirection: 'row',
						// borderWidth: 1,
						width: 0.9 * width,
						alignItems: 'center',
						justifyContent: 'space-between',
						borderRadius: 12,
						paddingHorizontal: width * 0.05,
						paddingVertical: height * 0.02,
						backgroundColor: appColors.whiteHalf,
						marginVertical: 10,
					}}
				>
					<View>
						<Text>Facilisis mauris turpis sed amet diam phasellus quis</Text>
					</View>
					<TouchableOpacity
						onPress={() => {
							setSelected(false)
						}}
						style={{ margin: width * 0.025 }}
					>
						<Image source={arrowDownwardIos} />
					</TouchableOpacity>
				</View>
			)}
			{!selected && (
				<View
					style={{
						flexDirection: 'row',
						// borderWidth: 1,
						width: 0.9 * width,
						// alignItems: 'center',
						justifyContent: 'space-between',
						borderRadius: 12,
						paddingHorizontal: width * 0.05,
						paddingVertical: height * 0.03,
						backgroundColor: appColors.white,
						marginVertical: 10,
					}}
				>
					<View style={{ flexDirection: 'column', flex: 5 }}>
						<Text>Facilisis mauris turpis sed amet diam phasellus quis</Text>
						<View
							style={{
								widht: width * 0.7,
								borderWidth: 1,
								marginVertical: 10,
								borderColor: 'lightgray',
							}}
						></View>
						<Text>
							Vestibulum fusce porttitor venenatis gravida eu magna dictum
							risus. Convallis mi neque eget vitae lacus in pellentesque congue
							cursus.
						</Text>
					</View>
					<TouchableOpacity
						onPress={() => {
							setSelected(true)
						}}
						style={{ marginHorizontal: width * 0.02, flex: 1 }}
					>
						<Image source={arrowForward} />
					</TouchableOpacity>
				</View>
			)}
		</View>
	)
}

export default Dropdown

const styles = StyleSheet.create({})

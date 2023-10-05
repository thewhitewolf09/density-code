import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	Image,
	SafeAreaView,
} from 'react-native'
import React, { useState } from 'react'
import { arrowDownwardIos, arrowForward } from '../../../assets/assets'
import { TouchableOpacity } from 'react-native-gesture-handler'
import appColors from '../../../styles/Colors'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps'
const { width, height } = Dimensions.get('window')

import HunterSemiBoldText from '../../../components/UI/HunterSemiBoldText'
import HunterText from '../../../components/UI/HunterText'

const Dropdown = ({ amount, message, sign }) => {
	const [selected, setSelected] = useState(true)
	return (
		<SafeAreaView>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
							borderWidth: 2,
						}}
					>
						<View>
							<Text>
								{sign} ₹{amount}
							</Text>
						</View>
						<View>
							<Text>{message}</Text>
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
							<View style={{ flexDirection: 'row' }}>
								<View style={{ flex: 1 }}>
									<Text>
										{sign} ₹{amount}
									</Text>
								</View>
								<View style={{ flex: 2 }}>
									<Text>{message}</Text>
								</View>
							</View>
							<View style={{ flex: 1, alignItems: 'center', width: '100%' }}>
								<ProgressSteps
									borderWidth={4}
									progressBarColor="linear-gradient(90deg, #CF7A6A 0%, #EF528D 44.27%, #5F40DD 100%)"
								>
									<ProgressStep
										removeBtnRow={true}
										label="Funds Transfered"
									></ProgressStep>
									<ProgressStep label="Deposit processing"></ProgressStep>
									<ProgressStep label="Amount deposited"></ProgressStep>
								</ProgressSteps>
								<View
									style={{
										width: '90%',
										height: 52,
										backgroundColor: 'rgba(217, 217, 217, 0.4)',
										padding: 10,
										borderRadius: 8,
										alignSelf: 'center',
										flexDirection: 'row',
										justifyContent: 'center',
										marginBottom: 10,
									}}
								>
									<View style>
										<Text style={{ fontSize: 10, lineHeight: 15 }}>
											Transaction Id:
											<Text style={{ color: '#A3A3A3' }}>12345TEVERW1231</Text>
										</Text>
										<Text style={{ fontSize: 10, lineHeight: 15 }}>
											Expected date:
											<Text style={{ color: '#A3A3A3' }}>12/12/2016 09:30</Text>
										</Text>
									</View>
								</View>
							</View>
							{/* <View
							style={{
								backgroundColor: appColors.secondaryDark,
								borderRadius: 8,
								paddingHorizontal: 10,
							}}
						>
							<View style={{ flexDirection: 'row' }}>
								<HunterSemiBoldText style={{ fontSize: 10 }}>
									Transaction ID:{' '}
								</HunterSemiBoldText>
								<HunterText style={{ fontSize: 10 }}>
									12345TEVERW1231
								</HunterText>
							</View>
							<View style={{ flexDirection: 'row' }}>
								<HunterSemiBoldText style={{ fontSize: 10 }}>
									Transaction ID:{' '}
								</HunterSemiBoldText>
								<HunterText style={{ fontSize: 10 }}>
									12345TEVERW1231
								</HunterText>
							</View>
						</View> */}
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
		</SafeAreaView>
	)
}

export default Dropdown

const styles = StyleSheet.create({})

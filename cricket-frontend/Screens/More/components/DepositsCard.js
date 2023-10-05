import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import HunterSemiBoldText from '../../../components/UI/HunterSemiBoldText'
import { arrowDownwardIos, backArrow } from '../../../assets/assets'
import screenUtils from '../../../constants/Dimensions'
import HunterText from '../../../components/UI/HunterText'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps'

const DepositsCard = ({ amount, message, sign }) => {
	const [openDropdown, setOpenDropdown] = useState(true)
	return (
		<View>
			<View
				style={{
					borderRadius: 12,
					width: '95%',
					marginVertical: screenUtils.height / 100,
					marginLeft: screenUtils.width / 100,
					backgroundColor: '#fff',
				}}
			>
				<Pressable
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						borderRadius: 12,
					}}
				>
					<View
						style={{
							display: 'flex',
							justifyContent: 'center',
							paddingLeft: screenUtils.width / 20,
							paddingRight: 0,
							paddingVertical: screenUtils.height / 60,
							flexDirection: 'row',
							justifyContent: 'space-between',
							width: '100%',
						}}
					>
						<HunterSemiBoldText>
							{sign} ₹{amount}
						</HunterSemiBoldText>
						<HunterText>{message}</HunterText>
						<View style={{ alignSelf: 'center', paddingRight: 10 }}>
							{openDropdown ? (
								<Image source={backArrow} />
							) : (
								<Image source={arrowDownwardIos} />
							)}
						</View>
					</View>
				</Pressable>
				{openDropdown ? (
					<View>
						<View
							style={{ width: '100%', borderWidth: 1, color: 'grey' }}
						></View>
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
					</View>
				) : null}
			</View>
		</View>
	)
}

export default DepositsCard

const styles = StyleSheet.create({})

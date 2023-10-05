import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import WalletHeader from '../../components/UI/WalletHeader'
import HunterText from '../../components/UI/HunterText'
import Colors from '../../styles/Colors'
import HunterButton from '../../components/UI/Buttons/HunterButton'

import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Liquidate = () => {
	const navigation = useNavigation()
	const [bank, setBank] = useState(false)
	const [bankNavigate, setBankNavigate] = useState(false)
	const [panInput, setPanInput] = useState(false)
	const [nameInput, setNameInput] = useState(false)
	const [pan, setPan] = useState('')
	const [panName, setPanName] = useState('')
	const [accNumber, setAccNumber] = useState('')
	const [IFSC, setIFSC] = useState('')
	return (
		<View style={{ flex: 1 }}>
			<LinearGradient
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				locations={[0, 0.2, 0.5, 0.6]}
				colors={['#6D48FF', '#f09bc066', '#724cfe33', '#6e49ff00']}
			>
				<WalletHeader style={{}} />
				<View
					style={{
						height: 0.91 * height,
						borderColor: Colors.white,
						backgroundColor: Colors.whiteHalf,
						borderTopLeftRadius: 17,
						borderTopRightRadius: 17,
					}}
				>
					<View
						style={{
							alignItems: 'center',
						}}
					>
						<HunterText
							style={{
								fontSize: 20,
								fontWeight: '600',
								paddingVertical: height * 0.02,
							}}
						>
							Liquidate
						</HunterText>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								alignItem: 'center',
							}}
						>
							<View style={{ alignItems: 'center' }}>
								<View
									style={{
										borderWidth: 1,
										width: 32,
										height: 32,
										borderRadius: 48,
										alignItems: 'center',
										justifyContent: 'center',
										borderColor: Colors.white,
										backgroundColor: Colors.hunter,
										elevation: 10,
									}}
								>
									<Text>1</Text>
								</View>
								<Text>Verify PAN</Text>
							</View>
							<View
								style={{
									width: 180,
									borderWidth: 1,
									height: 1,
									borderColor: Colors.hunter,
									marginVertical: 16,
									marginLeft: -20,
									marginRight: -28,
								}}
							></View>
							<View style={{ alignItems: 'center' }}>
								<View
									style={{
										borderWidth: 1,
										width: 32,
										height: 32,
										borderRadius: 48,
										alignItems: 'center',
										justifyContent: 'center',
										borderColor: Colors.white,
										backgroundColor: Colors.hunter,
										elevation: 10,
									}}
								>
									<Text>2</Text>
								</View>
								<Text>Bank Details</Text>
							</View>
						</View>
					</View>
					<View>
						{bank ? (
							<HunterText
								style={{
									marginHorizontal: width * 0.05,
									marginVertical: height * 0.015,
									fontWeight: '600',
									FontSize: 16,
								}}
							>
								Bank Details
							</HunterText>
						) : (
							<HunterText
								style={{
									marginHorizontal: width * 0.05,
									marginVertical: height * 0.015,
									fontWeight: '600',
									FontSize: 16,
								}}
							>
								PAN
							</HunterText>
						)}
						{bank ? (
							<TextInput
								placeholder="Account No."
								onChange={(text) => {
									setAccNumber(text)
								}}
								style={{
									borderWidth: 2,
									marginHorizontal: 0.05 * width,
									borderRadius: 12,
									paddingHorizontal: 0.046 * width,
									paddingVertical: 0.015 * height,
									marginBottom: 0.014 * height,
									borderColor: Colors.secondaryDark,
								}}
							/>
						) : (
							<TextInput
								placeholder="PAN"
								onChange={(text) => {
									setPan(text)
									if (text.length > 0) {
										setPanInput(true)
									}
								}}
								style={{
									borderWidth: 2,
									marginHorizontal: 0.05 * width,
									borderRadius: 12,
									paddingHorizontal: 0.046 * width,
									paddingVertical: 0.015 * height,
									marginBottom: 0.014 * height,
									borderColor: Colors.secondaryDark,
								}}
							/>
						)}
						{bank ? (
							<TextInput
								placeholder="IFSC Code"
								onChange={(text) => {
									setIFSC(text)
								}}
								style={{
									borderWidth: 2,
									marginHorizontal: 0.05 * width,
									borderRadius: 12,
									paddingHorizontal: 0.046 * width,
									paddingVertical: 0.014 * height,
									marginBottom: 0.014 * height,
									borderColor: Colors.secondaryDark,
								}}
							/>
						) : (
							<TextInput
								placeholder="Name on PAN"
								onChange={(text) => {
									setPanName(text)
									if (text.length > 0) {
										setNameInput(true)
									}
								}}
								style={{
									borderWidth: 2,
									marginHorizontal: 0.05 * width,
									borderRadius: 12,
									paddingHorizontal: 0.046 * width,
									paddingVertical: 0.014 * height,
									marginBottom: 0.014 * height,
									borderColor: Colors.secondaryDark,
								}}
							/>
						)}
					</View>
					<View
						style={{
							elevation: 10,
							position: 'absolute',
							bottom: 0,
							flex: 1,
							flexDirection: 'row',
							margin: 16,
						}}
					>
						<HunterButton
							title={'Continue'}
							disabled={false}
							onPress={() => {
								navigation.navigate('LiquidationSuccess')
							}}
						/>
					</View>
				</View>
			</LinearGradient>
		</View>
	)
}

export default Liquidate

const styles = StyleSheet.create({})

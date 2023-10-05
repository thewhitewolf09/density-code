import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Dimensions,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import InfoIcon from '..//..//..//assets/Images/Svg/InfoIcon'
import ForwardArrow from '..//..//..//assets/Images/Svg/ForwardArrow'
import VectorIcon from '..//..//..//assets/Images/Svg/VectorIcon'
import SwipeButton from 'rn-swipe-button'
import HunterText from '../../../components/UI/HunterText'
import { useSelector } from 'react-redux'
import { getPortfolioData } from '../apiFunctions'

const Confirmation = ({
	swipe,
	setSwipe,
	handleconfirmationbottomsheet,
	state,
	sellStock,
	handlesellstockbottomsheet,
	handlejoinedbottomsheet,
	setSaveContestStatus,
	saveTeamfn,
}) => {
	const entryFee = useSelector((state) => state.currentContest.value.entryFee)
	const userId = useSelector((state) => state.user.value)
	const walletBalance = useSelector(
		(state) => state.portfolio.value.wallet_balance,
	)
	const isInsufficient = walletBalance < entryFee
	return (
		<View>
			<View style={styles.confirmation_container}>
				<View style={styles.entry_and_wallet_balance}>
					<HunterText>Entry</HunterText>
					<HunterText style={{}}>₹{entryFee}</HunterText>
				</View>
				<View style={styles.entry_and_wallet_balance}>
					<HunterText>Wallet Balance</HunterText>
					<HunterText style={{}}>₹{walletBalance?.toFixed(2)}</HunterText>
				</View>
			</View>
			{state === 0 ? (
				!isInsufficient ? (
					//insufficient balance for any contest
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
							padding: 10,
							backgroundColor: '#FFF8BB',
						}}
					>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								margin: 15,
							}}
						>
							<View style={{ marginRight: 5 }}>
								<InfoIcon />
							</View>
							<View>
								<Text
									style={{
										fontSize: 12,
										lineHeight: 18,
										color: '#1F1D29',
									}}
								>
									Insufficient Balance
								</Text>
								<Text
									style={{
										fontWeight: '400',
										fontSize: 12,
										lineHeight: 18,
										color: '#1F1D29',
									}}
								>
									Please add money to wallet
								</Text>
							</View>
						</View>
						<TouchableOpacity
							style={{
								width: 115,
								height: 30,
								backgroundColor: '#1F1D29',
								borderRadius: 13,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<HunterText
								style={{
									color: '#FFFFFF',
									fontSize: 12,
									lineHeight: 18,
								}}
							>
								Add to wallet
							</HunterText>
						</TouchableOpacity>
					</View>
				) : (
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
							padding: 10,
							backgroundColor: '#FFF8BB',
						}}
					>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								margin: 15,
								paddingRight: 15,
								width: 190,
							}}
						>
							<View style={{ marginRight: 5 }}>
								<InfoIcon />
							</View>
							<View>
								<Text
									style={{
										fontSize: 12,
										lineHeight: 18,
										color: '#1F1D29',
									}}
								>
									Insufficient Balance
								</Text>
								<Text
									style={{
										fontWeight: '400',
										fontSize: 12,
										lineHeight: 18,
										color: '#1F1D29',
									}}
								>
									Please add money to wallet or try a low entry price contest.
								</Text>
							</View>
						</View>
						<View
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<TouchableOpacity
								style={{
									width: 115,
									height: 30,
									backgroundColor: '#1F1D29',
									borderRadius: 13,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Text
									style={{
										color: '#FFFFFF',
										fontSize: 12,
										lineHeight: 18,
									}}
								>
									Add to wallet
								</Text>
							</TouchableOpacity>

							<TouchableOpacity
								style={{
									width: 115,
									height: 30,
									backgroundColor: 'transparent',
									borderRadius: 13,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									borderColor: '#1F1D29',
									borderWidth: 1,
									marginTop: 10,
								}}
							>
								<Text
									style={{
										color: '#1F1D29',
										fontSize: 12,
										lineHeight: 18,
									}}
								>
									Add to wallet
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				)
			) : null}
			{sellStock === true && state === 0 ? (
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						padding: 12,
					}}
				>
					<Text
						style={{
							fontSize: 12,
							lineHeight: 18,
							fontWeight: '400',
							color: '#1F1D29',
						}}
					>
						Stock holdings detected
					</Text>
					<TouchableOpacity
						onPress={() => {
							handleconfirmationbottomsheet(-1)
							handlesellstockbottomsheet(0)
						}}
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							height: 38,
						}}
					>
						<Text
							style={{
								fontSize: 12,
								lineHeight: 18,
								color: '#6D48FF',
								marginRight: 5,
							}}
						>
							Sell Stocks
						</Text>
						<ForwardArrow color="#6D48FF" />
					</TouchableOpacity>
				</View>
			) : null}
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
				}}
			>
				{/* Swipe Button */}

				<SwipeButton
					disabled={false}
					//disable the button by doing true (Optional)
					swipeSuccessThreshold={60}
					height={60}
					//height of the button (Optional)
					width={350}
					//width of the button (Optional)
					title="Swipe to Join"
					titleStyles={{
						fontFamily: 'hunter',
						color: swipe ? 'black' : 'white',
						zIndex: 1,
					}}
					//Text inside the button (Optional)
					//thumbIconImageSource={thumbIcon}
					//You can also set your own icon (Optional)
					containerStyles={{
						borderRadius: 12,
					}}
					//After the completion of swipe (Optional)
					//railBackgroundColor="#6D48FF"
					railFillBackgroundColor="#6D48FF" //(Optional)
					railFillBorderColor="#6D48FF" //(Optional)
					thumbIconBackgroundColor="#6D48FF" //(Optional)
					thumbIconBorderColor="#6D48FF" //(Optional)
					onSwipeSuccess={() => {
						setSwipe(false)
						// setSaveContestStatus(true)
						saveTeamfn()
						setTimeout(() => {
							handlejoinedbottomsheet(0)
							handleconfirmationbottomsheet(-1)
						}, 1500)
					}}
					railBackgroundColor="white" //(Optional)
					railBorderColor="lightgray" //(Optional)
					thumbIconComponent={() => <VectorIcon />}
					thumbIconStyles={{
						borderRadius: 12,
					}}
					railStyles={{
						borderRadius: 12,
					}}
					shouldResetAfterSuccess={true}
				/>
			</View>
		</View>
	)
}

export default Confirmation

const styles = StyleSheet.create({
	confirmation_container: {
		display: 'flex',
		flexDirection: 'column',
	},
	entry_and_wallet_balance: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 15,
		margin: 5,
		font: {
			fontSize: 14,
			fontWeight: '400',
			lineHeight: 21,
			color: '#1F1D29',
		},
	},
})

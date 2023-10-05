import { Dimensions, Pressable, SafeAreaView, Text, Alert } from 'react-native'
import React from 'react'
import PressableCard from './components/PressableCard'
import leaderboardicon from '../../assets/MoreIcons/leaderboard.png'
import account_balance from '../../assets/MoreIcons/account_balance.png'
import account_balance_wallet from '../../assets/MoreIcons/account_balance_wallet.png'
import live_help from '../../assets/MoreIcons/live_help.png'
import notification_active from '../../assets/MoreIcons/notifications_active.png'
import receipt_long from '../../assets/MoreIcons/receipt_long.png'
import redeem from '../../assets/MoreIcons/redeem.png'
import slideshow from '../../assets/MoreIcons/slideshow.png'
import { LinearGradient } from 'expo-linear-gradient'
import screenUtils from '../../constants/Dimensions'
import { useNavigation } from '@react-navigation/native'

const Moretrial = () => {
	const navigation = useNavigation()
	function showAlert1() {
		Alert.alert('Heyaa!!!', 'This segment is under development', [
			{
				text: 'Cancel',
				// onPress: () => console.log('Cancel Pressed'),
				style: 'cancel',
			},
			{
				text: 'OK',
				// onPress: () => console.log('OK Pressed')
			},
		])
	}

	return (
		<SafeAreaView>
			<Pressable
				onPress={() => {
					navigation.navigate('UserInfo')
				}}
			>
				<PressableCard title="UserInfo" imageSrc={receipt_long} />
			</Pressable>
			<Pressable
				onPress={() => {
					navigation.navigate('Transactions')
				}}
			>
				<PressableCard title="Transactions" imageSrc={receipt_long} />
			</Pressable>
			<Pressable onPress={showAlert1}>
				<PressableCard title="Payment details" imageSrc={account_balance} />
			</Pressable>
			<Pressable onPress={() => navigation.navigate('AddMoney')}>
				<PressableCard title="Wallet" imageSrc={account_balance_wallet} />
			</Pressable>
			<Pressable onPress={() => navigation.navigate('ViewAllIplLeaderBoard')}>
				<PressableCard title="LeaderBoard" imageSrc={leaderboardicon} />
			</Pressable>
			<Pressable onPress={showAlert1}>
				<PressableCard title="How to Play" imageSrc={slideshow} />
			</Pressable>
			<Pressable onPress={showAlert1}>
				<PressableCard title="Help and Support" imageSrc={live_help} />
			</Pressable>
			<Pressable onPress={showAlert1}>
				<PressableCard title="Invite and get 500" imageSrc={redeem} />
			</Pressable>
		</SafeAreaView>
	)
}

export default Moretrial

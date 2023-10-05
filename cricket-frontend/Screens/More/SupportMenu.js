import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	TextInput,
	Dimensions,
	Image,
	ScrollView,
	Pressable,
	TouchableOpacity,
	Alert,
} from 'react-native'
import WalletHeader from '../../components/UI/WalletHeader'

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

const SupportMenu = () => {
	const navigation = useNavigation()
	return (
		<SafeAreaView style={{ height: '100%' }}>
			<LinearGradient
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				locations={[0, 0.2, 0.5, 0.6]}
				colors={['#6D48FF', '#f09bc066', '#724cfe33', '#6e49ff00']}
			>
				{/* Header View */}

				<WalletHeader title={'Pool Games'} />
				<View style={{ display: 'flex', alignItems: 'center' }}>
					<Pressable onPress={() => navigation.navigate('ContactUs')}>
						<PressableCard title="Contact Us" imageSrc={account_balance} />
					</Pressable>
					<Pressable onPress={() => navigation.navigate('Faq')}>
						<PressableCard title="FAQs" imageSrc={receipt_long} />
					</Pressable>
					<Pressable onPress={() => navigation.navigate('RaiseQuery')}>
						<PressableCard title="Raise Query" imageSrc={live_help} />
					</Pressable>
				</View>
			</LinearGradient>
		</SafeAreaView>
	)
}

export default SupportMenu

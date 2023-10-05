import { Pressable, StyleSheet, View } from 'react-native'
import HunterText from '../HunterText'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

const BuySell = ({ tradePlayer }) => {

	const navigation = useNavigation()

	return (
		<View>
			<View
				style={{
					position: 'absolute',
					bottom: 0,
					backgroundColor: '#FFFFFF',
					padding: 25,
					flex: 1,
					display: 'flex',
					flexDirection: 'row',
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
				}}
			>
				<View
					style={{
						flex: 1,
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}
				>
					<Pressable
						onPress={() => navigation.navigate("BuySell")}
						style={{ flex: 0.45, elevation: 10 }}
					>
						<HunterText
							style={{
								backgroundColor: '#EDEFF1',
								textAlign: 'center',
								borderRadius: 12,
								padding: 13,
								fontSize: 16,
							}}
						>
							Sell
						</HunterText>
					</Pressable>
					<Pressable onPress={() => navigation.navigate("BuySell")} style={{ flex: 0.45 }}>
						<HunterText
							style={{
								backgroundColor: '#6D48FF',
								color: 'white',
								textAlign: 'center',
								borderRadius: 12,
								padding: 13,
								fontSize: 16,
							}}
						>
							Buy
						</HunterText>
					</Pressable>
				</View>
			</View>
		</View>
	)
}

export default BuySell

const styles = StyleSheet.create({})

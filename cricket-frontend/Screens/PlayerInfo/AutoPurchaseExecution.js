import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AutoPurchaseExecution = ({
	autoBuySellPurchase,
	setAutoBuySellPurchase,
	autoPurchase,
	setAutoPurchase,
}) => {
	return (
		<View style={styles.auto_buy_set_container}>
			{autoBuySellPurchase === 0 ? (
				<Text style={styles.auto_buy_set_container.font}>
					Successfully purchased 2 Virat Kohli stocks at{' '}
					<Text style={{ color: '#000000', fontWeight: 'bold' }}>₹2400</Text>{' '}
				</Text>
			) : (
				<Text style={styles.auto_buy_set_container.font}>
					Successfully sold 2 Virat Kohli stocks at{' '}
					<Text style={{ color: '#000000', fontWeight: 'bold' }}>₹2400</Text>{' '}
				</Text>
			)}
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
				}}
			>
				<Pressable
					style={{
						backgroundColor: '#6D48FF',
						width: 340,
						height: 50,
						borderRadius: 12,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						alignSelf: 'center',
						marginTop: 29,
						elevation: 10,
					}}
					onPress={() => {
						setAutoPurchase(0)
					}}
				>
					<Text
						style={{
							color: 'white',
							fontSize: 16,
							fontWeight: '500',
							paddingHorizontal: 20,
							lineHeight: 24,
							textAlignVertical: 'center',
							textAlign: 'center',
						}}
					>
						Okay
					</Text>
				</Pressable>
			</View>
		</View>
	)
}

export default AutoPurchaseExecution

const styles = StyleSheet.create({
	auto_buy_set_container: {
		padding: 20,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		font: {
			fontSize: 16,
			fontWeight: '400',
			lineHeight: 24,
			color: '#606060',
		},
	},
})

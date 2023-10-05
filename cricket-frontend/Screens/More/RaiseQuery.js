import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import WalletHeader from '../../components/UI/WalletHeader'
import HunterBoldText from '../../components/UI/HunterBoldText'
import FilterButton from '../../components/UI/Buttons/FilterButton'
import HunterText from '../../components/UI/HunterText'
import FooterButtons from '../../components/UI/Buttons/FooterButtons'

const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height
const RaiseQuery = () => {
	const [query, setquery] = useState(false)
	const [selectQueryIndex, setSelectQueryIndex] = useState()
	const QueryType = [
		'Account',
		'Contest',
		'Refund',
		'Token',
		'Transaction',
		'Other',
	]
	// useEffect(() => {
	// 	if (firstName !== '' && lastName !== '') {
	// 		setBtnColor(true)
	// 	} else {
	// 		setBtnColor(false)
	// 	}
	// }, [lastName])
	return (
		<View style={{ height: sHeight }}>
			<LinearGradient
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				locations={[0, 0.2, 0.5, 0.6]}
				colors={['#6D48FF', '#f09bc066', '#724cfe33', '#6e49ff00']}
			>
				<WalletHeader />
				<View style={{ margin: sWidth / 20 }}>
					<TextInput
						multiline
						numberOfLines={7}
						value={query}
						style={{
							textAlignVertical: 'top',
							fontFamily: 'hunter',
							width: '100%',
							height: 281,
							marginHorizontal: 2,
							backgroundColor: '#fff',
							borderRadius: 12,
							padding: 15,
							elevation: 10,
						}}
						placeholder="What is the issue you are facing?"
						onChangeText={setquery}
					/>
					<View style={{ paddingTop: 20 }}>
						<Text style={{ fontSize: 16, fontWeight: '500', lineHeight: 24 }}>
							Query type
						</Text>
					</View>
					<View
						style={{
							flexDirection: 'row',
							marginVertical: 14,
							paddingHorizontal: 20,
							flexWrap: 'wrap',
						}}
					>
						{QueryType.map((queryType, index) => (
							<FilterButton
								active={index === selectQueryIndex}
								onPress={() => {
									setSelectQueryIndex(index)
								}}
								title={queryType}
								key={queryType}
								style={{ marginHorizontal: 5, marginVertical: 5 }}
							/>
						))}
					</View>
				</View>
			</LinearGradient>
			<View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
				<FooterButtons
					checked={query && selectQueryIndex + 1 ? true : false}
					leftVisible={false}
					rightTitle="Submit"
					rightPress={() => {
						console.log(query, selectQueryIndex)
					}}
				/>
			</View>
		</View>
	)
}

export default RaiseQuery

const styles = StyleSheet.create({})

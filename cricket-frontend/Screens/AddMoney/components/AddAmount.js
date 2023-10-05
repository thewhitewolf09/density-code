import {
	Dimensions,
	SafeAreaView,
	StyleSheet,
	TextInput,
	View,
} from 'react-native'
import React, { useState } from 'react'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

import HunterText from '../../../components/UI/HunterText'
import appColors from '../../../styles/Colors'
import FilterButton from '../../../components/UI/Buttons/FilterButton'

const AddAmount = () => {
	const [upiid, setUpiid] = useState('')
	const [correctUpiId, setCorrectUpiId] = useState(false)
	return (
		<SafeAreaView style={{ height: '100%', flex: 1 }}>
			<View style={{ backgroundColor: 'white', paddingTop: height * 0.03 }}>
				<HunterText
					style={{
						fontWeight: '500',
						fontSize: 14,
					}}
				>
					Add Amount
				</HunterText>
				<TextInput
					keyboardType="numeric"
					placeholder="₹1200"
					style={{
						// borderStyle: "solid",
						paddingVertical: height * 0.01,
						paddingHorizontal: width * 0.04,
						fontSize: 16,
						borderColor: appColors.secondaryDark,
						borderWidth: 2,
						borderRadius: 10,
						marginTop: height * 0.005,
						marginBottom: height * 0.015,
						fontFamily: 'hunter',
					}}
				/>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'flex-start',
						marginBottom: height * 0.02,
					}}
				>
					<FilterButton style={{ marginRight: 16 }} title={'₹150'} />
					<FilterButton style={{ marginRight: 16 }} title={'₹500'} />
					<FilterButton style={{ marginRight: 16 }} title={'₹1000'} />
				</View>
			</View>
			<View
				style={{
					backgroundColor: 'white',
					paddingTop: height * 0.03,
					flex: 1,
					justifyContent: 'space-between',
				}}
			></View>
		</SafeAreaView>
	)
}

export default AddAmount

const styles = StyleSheet.create({})
{
	/* <LinearGradient
    start={{ x: 0.5, y: 0 }}
    end={{ x: 0.5, y: 1 }}
    locations={[0, 0.2, 0.5, 0.6]}
    colors={["#6D48FF", "#f09bc066", "#724cfe33", "#6e49ff00"]}
>
    <WalletHeader />
    <View
        style={{
            // flexDirection: "row",
            backgroundColor: "#FFFFFF80",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
            width: width * 0.73,
            borderRadius: 10,
        }}
    >
        <Text>Total Wallet Balance</Text>
        <HunterText style={{ color: "#0B0617", textAlignVertical: "center", fontWeight: "400", }}>
            ₹2,400
        </HunterText>
    </View>
</LinearGradient> */
}

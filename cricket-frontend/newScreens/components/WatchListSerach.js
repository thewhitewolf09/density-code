import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	TextInput,
    TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'

import HunterText from '../../components/UI/HunterText'
import AntDesign from 'react-native-vector-icons/AntDesign'
import appColors from '../../styles/Colors'
import { arrowBack } from '../../assets/assets'

const { width, height } = Dimensions.get('window')

const WatchListSerach = () => {
	const [search, setSearch] = useState(false)
	return (
		<View>
			{search && (
				<View style={styles.searchView}>
					<View style={styles.watch}>
						<View style={{ marginHorizontal: 15 }}>
							<Image source={arrowBack} />
						</View>
						<View style={{ marginHorizontal: 15 }}>
							<HunterText style={{ fontSize: 16, color: appColors.white }}>
								Watchlist
							</HunterText>
						</View>
					</View>
					<TouchableOpacity onPress={()=>{setSearch(!search)}} >
						<AntDesign name="search1" size={30} color={appColors.white} />
					</TouchableOpacity>
				</View>
			)}
			{!search && <View style={styles.searchView}>
				<View
					style={styles.searchInput}
				>
                    <View style={{ marginHorizontal: 10, }} >
					    <AntDesign name="search1" size={30} color={appColors.secondaryDark} />
                    </View>
					<TextInput placeholder="Search" />
				</View>
				<TouchableOpacity style={{ flex: 1, marginHorizontal: 10 }} onPress={()=>{setSearch(!search)}} >
					<HunterText>Cancel</HunterText>
				</TouchableOpacity>
			</View>}
		</View>
	)
}

export default WatchListSerach

const styles = StyleSheet.create({
	searchView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: width * 0.04,
        height: height*0.05,
	},
	watch: {
		flexDirection: 'row',
	},
    searchInput: {
        flexDirection: 'row',
        backgroundColor: appColors.white,
        flex: 4,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        height: height*0.05,
        alignItems: 'center',
        borderRadius: 16,
    }
})

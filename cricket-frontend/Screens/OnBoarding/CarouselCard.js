import React, { useState, useNavigation } from 'react'
import { View, Dimensions, Pressable, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { Screen1Img, Screen2Img, Screen3Img } from '../../assets/assets'
import HunterButton from '../../components/UI/Buttons/HunterButton'
import AppIntroSlider from 'react-native-app-intro-slider'
import PhoneNumber from '../Login/PhoneNumber'
import WalletHeader from '../../components/UI/WalletHeader'
import { LinearGradient } from 'expo-linear-gradient'
import { shadow } from '../../assets/assets'
import HunterSemiBoldText from '../../components/UI/HunterSemiBoldText'
import HunterText from '../../components/UI/HunterText'
import appColors from '../../styles/Colors'

const sHeight = Dimensions.get('window').height
const sWidth = Dimensions.get('window').width
const SLIDER_WIDTH = Dimensions.get('window').width

// const navigation = useNavigation()
const CarouselCards = ({ navigation }) => {
	const [showRealApp, setShowRealApp] = useState(false)

	const onDone = () => {
		navigation.navigate('PhoneNumber')
	}
	const players = [
		{
			title: `Win profits ${'\n'} & dividends`,
			subtitle: `Lorem ipsum dolor sit amet consectetur ${'\n'} adipisicing elit. Maxime mollitia, molestiae ${'\n'} quas vel sint commodi`,
			image: Screen1Img,
			width: 318.9,
			height: 275.84,
			marbottom: 50,
		},
		{
			title: `Win profits  ${'\n'} & dividends`,
			subtitle: `Lorem ipsum dolor sit amet consectetur ${'\n'}adipisicing elit. Maxime mollitia, molestiae ${'\n'} quas vel sint commodi`,
			image: Screen2Img,
			width: 212,
			height: 292.2,
			marbottom: 50,
		},
		{
			title: `Win profits  ${'\n'} & dividends`,
			subtitle: `Lorem ipsum dolor sit amet consectetur ${'\n'} adipisicing elit. Maxime mollitia, molestiae ${'\n'} quas vel sint commodi`,
			image: Screen3Img,
			width: 323,
			height: 384.52,
			marbottom: 0,
		},
	]

	// const RenderNextButton = () => {
	// 	return (
	// 		<View
	// style={{
	// 	width: '90%',
	// 	flexDirection: 'row',
	// 	alignSelf: 'center',
	// 	mart: -50,
	// }}
	// 		>

	// 		</View>
	// 	)
	// }
	const RenderNextButton = () => {
		return (
			<TouchableOpacity
				style={{
					width: '100%',
					flexDirection: 'row',
					alignSelf: 'center',
					mart: -50,
				}}
			>
				<View
					style={[
						{
							width: '100%',
							borderRadius: 12,
							paddingVertical: 13,
							elevation: 20,
							backgroundColor: appColors.hunter,
						},
					]}
				>
					<HunterText
						style={{
							color: 'white',
							fontSize: 16,
							textAlign: 'center',
							fontFamily: 'hunterBold',
						}}
					>
						Continue ➜
					</HunterText>
				</View>
			</TouchableOpacity>
		)
	}
	const RenderDoneButton = () => {
		return (
			<TouchableOpacity
				style={{
					width: '100%',
					flexDirection: 'row',
					alignSelf: 'center',
					mart: -50,
				}}
			>
				<View
					style={[
						{
							width: '100%',
							borderRadius: 12,
							paddingVertical: 13,
							elevation: 20,
							backgroundColor: appColors.hunter,
						},
					]}
				>
					<HunterText
						style={{
							color: 'white',
							fontSize: 16,
							textAlign: 'center',
							fontFamily: 'hunterBold',
						}}
					>
						Done
					</HunterText>
				</View>
			</TouchableOpacity>
		)
	}

	const RenderItem = ({ item }) => (
		<View>
			<LinearGradient
				// style={style}
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				locations={[0, 0.33, 0.5, 0.91, 0.92, 0.93]}
				colors={[
					'rgba(109, 72, 255, 1)',
					'rgba(125, 96, 255, 1)',
					'rgba(162, 151, 255, 1)',
					'rgba(220, 237, 255, 1)',
					'rgba(223, 242, 255, 0.68)',
					'rgba(231, 253, 255, 0)',
				]}
			>
				<View
					style={{
						height: sHeight / 1.4,
						width: '90%',
						marginLeft: '7%',
						marginTop: sHeight / 5,
					}}
				>
					<HunterSemiBoldText
						style={{
							fontSize: 36,
							lineHeight: 54,
							color: '#fff',
						}}
					>
						{item.title}
					</HunterSemiBoldText>
					<HunterText
						style={{
							fontSize: 14,
							lineHeight: 21,
							color: '#fff',
							marginTop: 20,
						}}
					>
						{item.subtitle}
					</HunterText>
				</View>
				<View
					style={{
						flexDirection: 'row',
						alignSelf: 'center',
						position: 'absolute',
						bottom: 0,
					}}
				>
					<View
						style={{
							height: 259,
							width: 370,
							backgroundColor: 'rgba(237, 234, 244, 0.6)',
							flexDirection: 'column',
							justifyContent: 'flex-end',
							paddingBottom: 30,
							borderTopLeftRadius: 32,
							borderTopRightRadius: 32,
						}}
					>
						<View style={{ marginBottom: item.margbottom, marginLeft: 50 }}>
							<Image
								source={item.image}
								style={{ width: item.width, height: item.height }}
							/>
							<Image source={shadow} />
						</View>
					</View>
				</View>
			</LinearGradient>
		</View>
	)
	return (
		<>
			{showRealApp ? (
				<PhoneNumber />
			) : (
				<View style={{ height: '100%' }}>
					<AppIntroSlider
						renderNextButton={RenderNextButton}
						renderDoneButton={RenderDoneButton}
						onDone={onDone}
						data={players}
						renderItem={RenderItem}
						activeDotStyle={{
							width: 40,
							height: 6,
							borderRadius: 36,
							marginHorizontal: 0,
							backgroundColor: 'rgba(109, 72, 255, 0.66)',
							marginBottom: sHeight / 8,
						}}
						dotClickEnabled={false}
						renderPagination={false}
						dotStyle={{
							width: 16,
							height: 6,
							borderRadius: 5,
							backgroundColor: 'rgba(109, 72, 255, 0.66)',
							marginBottom: sHeight / 8,
						}}
						inactiveDotOpacity={0.4}
						inactiveDotScale={0.6}
						tappableDots={false}
					/>
				</View>
			)}
		</>
	)
}

export default CarouselCards

import { Dimensions, Image, Text, View } from 'react-native'
import React from 'react'
import WalletHeader from '../../components/UI/WalletHeader'
import HunterGradient from '../../components/UI/Gradient'
import { arrowDownwardIos, emptyPort } from '../../assets/assets'

const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height
export default function EmptyPortfolio() {
	return (
		<View>
			<HunterGradient style={{ height: sHeight }}>
				<WalletHeader />
				<View style={{ alignItems: 'center', textAlign: 'center' }}>
					<Image
						source={emptyPort}
						style={{
							width: 196,
							height: 196,
							zIndex: 1,
							marginTop: 105,
						}}
					/>
				</View>
				<View style={{ alignItems: 'center' }}>
					<Text
						style={{
							color: 'rgba(31,29,41, 0.6)',
							fontSize: 12,
							fontWeight: '400',
						}}
					>
						E M P T Y P O R T F O L I O
					</Text>

					<View
						style={{
							backgroundColor: 'rgba(255, 255, 255, 0.8)',
							width: 181,
							height: 40,
							borderRadius: 20,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							marginTop: 20,
						}}
					>
						<Text
							style={{
								fontSize: 16,
								fontWeight: '600',
								lineHeight: 24,
								color: 'rgba(117, 117, 117, 1)',
								textAlignVertical: 'center',
								textAlign: 'center',
							}}
						>
							Build your portfolio{'  '}
							<Image
								source={arrowDownwardIos}
								style={{
									zIndex: 1,
									marginTop: 105,
								}}
							/>
						</Text>
					</View>
				</View>
			</HunterGradient>
			{/* <View
        style={{
          position: "absolute",
          bottom: 0,
          flex: 1,
          flexDirection: "row",
          margin: 16,
        }}
      >
        <HunterButton title={"Add money"} />
      </View> */}
		</View>
	)
}

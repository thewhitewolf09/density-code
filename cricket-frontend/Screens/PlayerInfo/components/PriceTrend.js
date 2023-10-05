import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LineChart } from 'react-native-chart-kit'
import HunterText from '../../../components/UI/HunterText'
import FilterButton from '../../../components/UI/Buttons/FilterButton'

const PriceTrend = () => {
	const sWidth = Dimensions.get('window').width
	const sHeight = Dimensions.get('window').height
	const filters = ['1 week', '1 month', '3 months', 'All time']
	const [activeIndex, setActiveIndex] = useState(0)
	const [data, setData] = useState([2, 3, 5, 9, 6, 7, 10])

	useEffect(() => {
		setTimeout(() => {
			updatePriceData()
		}, 1000)
	}, [data])

	const updatePriceData = () => {
		// setData(data.shift());
		setData((v) => [...v.slice(1), (Math.random() + 1) * 10])
	}

	const chartConfig = {
		backgroundGradientFrom: '#1E2923',
		backgroundGradientFromOpacity: 0,
		backgroundGradientTo: '#08130D',
		backgroundGradientToOpacity: 0.5,
		color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
		strokeWidth: 2, // optional, default 3
		barPercentage: 0.5,
		useShadowColorFromDataset: false, // optional
	}

	return (
		<View
			style={{
				backgroundColor: '#FFFFFF',
				padding: sWidth / 28.5,
				margin: sWidth / 20,
				borderRadius: 20,
			}}
		>
			<HunterText style={{ fontSize: 16, fontWeight: '500', color: '#0F0B19' }}>
				Price trend
			</HunterText>
			<View>
				<ScrollView
					horizontal={true}
					contentOffset={{ x: 10000, y: 0 }} // i needed the scrolling to start from the end not the start
					showsHorizontalScrollIndicator={false} // to hide scroll bar
				>
					<LineChart
						data={{
							// labels: ["", "", "", "", "", ""],
							datasets: [
								{
									data,
								},
							],
						}}
						width={sWidth / 1.2} // from react-native
						height={220}
						yAxisLabel="₹"
						onDataPointClick={({ value, dataset, getColor }) =>
							console.log('test:', value, dataset, getColor)
						}
						renderDotContent={({ x, y, index, indexData }) => (
							<HunterText
								style={{
									fontSize: 10,
									color: 'black',
									position: 'absolute',
									top: y,
									left: x,
								}}
							>
								{parseFloat(indexData).toFixed(1)}
							</HunterText>
						)}
						yAxisInterval={1} // optional, defaults to 1
						chartConfig={{
							backgroundGradientFrom: '#FFFFFF',
							backgroundGradientTo: '#FFFFFF',
							fillShadowGradientFromOpacity: '1',
							fillShadowGradientToOpacity: '0',
							decimalPlaces: 2, // optional, defaults to 2dp
							color: (opacity = 1) => `rgba(109, 72, 255, ${opacity * 10})`,
							labelColor: (opacity = 1) => `rgba(109, 72, 255, ${opacity})`,
							propsForDots: {
								r: '4',
								strokeWidth: '6',
								// stroke: "#ffa726",
							},
							propsForBackgroundLines: {
								strokeWidth: 0.5,
								opacity: 0.5,
							},
						}}
						bezier
						// withVerticalLines={false}
						// withHorizontalLabels={false}
						style={{
							marginVertical: 8,
							borderRadius: 16,
							// margin,
						}}
					/>
				</ScrollView>
			</View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					marginVertical: 6,
				}}
			>
				{filters.map((filter, index) => (
					<FilterButton
						key={index}
						title={filter}
						onPress={() => setActiveIndex(index)}
						active={index === activeIndex}
					/>
				))}
			</View>
		</View>
	)
}

export default PriceTrend

const styles = StyleSheet.create({})

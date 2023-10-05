import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'
import { BarChart } from 'react-native-chart-kit'
//
const PlayerPerformanceChart = ({ barWidth, chartWidth }) => {
	const chartConfig = {
		backgroundGradientFrom: '#F9F9F9',
		backgroundGradientFromOpacity: 0,
		backgroundGradientTo: '#F9F9F9',
		fillShadowGradientFromOpacity: '1',
		fillShadowGradientToOpacity: '0.5',
		backgroundGradientToOpacity: 0.5,
		propsForHorizontalLabels: { display: 'hidden' },
		barRadius: 4,
		color: (opacity = 1) => `rgba(109, 72, 255, ${opacity})`,
		strokeWidth: 20, // optional, default 3
		barPercentage: barWidth,
	}
	const sWidth = Dimensions.get('window').width
	const barData = {
		labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
		datasets: [
			{
				data: [20, 45, 28, 80, 99, 43, 20, 45, 28, 80],
			},
		],
	}
	//
	return (
		<View
			style={[
				{
					backgroundColor: '#FFFFFF',
					paddingVertical: 10,
					paddingRight: sWidth / 28.5,
					// marginHorizontal: sWidth / 20,
					borderRadius: 20,
					elevation: 10,
					// width: 200,
				},
			]}
		>
			<BarChart
				style={{
					shadowColor: '#6D48FF',
				}}
				data={barData}
				width={200}
				height={220}
				chartConfig={chartConfig}
				verticalLabelRotation={0}
			/>
		</View>
	)
}

export default PlayerPerformanceChart

const styles = StyleSheet.create({})

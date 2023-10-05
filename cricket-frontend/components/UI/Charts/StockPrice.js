import React, { forwardRef, useImperativeHandle } from 'react'
import WebView from 'react-native-webview'
import screenUtils from '../../../constants/Dimensions'
// eslint-disable-next-line react/display-name
const StockPrice = forwardRef((props, ref) => {
	let webRef
	const addChart = (config) => {
		webRef.injectJavaScript(`
		const canvasEl = document.createElement("canvas");
		document.body.appendChild(canvasEl);
		window.canvasLine = new Chart(canvasEl.getContext('2d'), ${JSON.stringify(
			config,
		)});
			`)
	}
	const setData = (dataSets) => {
		if (dataSets) {
			dataSets.forEach((_, i) => {
				// console.log(dataSets[i])
				webRef.injectJavaScript(`window.canvasLine.config.data.datasets[${i}].data = ${JSON.stringify(
					dataSets[i],
				)};
			window.canvasLine.update();`)
			})
		}
	}

	const setLabels = (labels) => {
		if (labels) {
			labels.forEach((_, i) => {
				// console.log(labels[i])
				webRef.injectJavaScript(`window.canvasLine.config.data.labels = ${JSON.stringify(
					labels[i],
				)};
			window.canvasLine.update();`)
			})
		}
	}
	useImperativeHandle(ref, () => ({
		setData,
	}))
	return (
		<WebView
			style={{
				height: screenUtils.height / 4,
				width: '100%',
				borderRadius: 20,
				borderWidth: 2,
			}}
			originWhitelist={['*']}
			ref={(r) => (webRef = r)}
			onLoadEnd={() => addChart(props.config)}
			source={{
				html: `<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
		<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.js"></script>
			</head>
		</html>`,
			}}
		/>
	)
})
export default StockPrice

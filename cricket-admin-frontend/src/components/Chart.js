import React, { Component } from "react";

import CanvasJSReact from "../canvasjs.stock.react";

var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = { dataPoints: [], isLoaded: false };
  }

  componentDidMount() {
    //Reference: https://reactjs.org/docs/faq-ajax.html#example-using-ajax-results-to-set-local-state
    fetch("https://canvasjs.com/data/gallery/react/btcusd2017-18.json") // Dummy Data is fetch  by fetch api
      .then((res) => res.json())
      .then((data) => {
        var dps = [];
        for (var i = 0; i < data.length; i++) {
          dps.push({
            x: new Date(data[i].date),
            y: Number(data[i].close),
          });
        }
        this.setState({
          isLoaded: true,
          dataPoints: dps,
        });
      });
  }

  render() {
    const options = {
      title: {
        text: "",
      },
      theme: "light2",
      subtitles: [
        {
          text: "Stock Price of Virat Kohli",
        },
      ],
      charts: [
        {
          axisX: {
            crosshair: {
              enabled: true,
              snapToDataPoint: true,
              valueFormatString: "MMM DD YYYY",
            },
          },
          axisY: {
            title: "Player Stock Price",
            prefix: "₹",
            crosshair: {
              enabled: true,
              snapToDataPoint: true,
              valueFormatString: "₹#,###.##",
            },
          },
          toolTip: {
            shared: true,
          },
          data: [
            {
              name: "Price (in INR)",
              type: "spline",
              color: "#3576a8",
              yValueFormatString: "₹#,###.##",
              xValueFormatString: "MMM DD YYYY",
              dataPoints: this.state.dataPoints,
            },
          ],
        },
      ],
      navigator: {
        slider: {
          minimum: new Date("2017-05-01"),
          maximum: new Date("2018-05-01"),
        },
      },
    };
    const containerProps = {
      width: "100%",
      height: "450px",
      margin: "auto",
    };
    return (
      <div>
        <div>
          {
            // Reference: https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator
            this.state.isLoaded && (
              <CanvasJSStockChart
                containerProps={containerProps}
                options={options}
                /* onRef = {ref => this.chart = ref} */
              />
            )
          }
        </div>
      </div>
    );
  }
}

export default Chart;

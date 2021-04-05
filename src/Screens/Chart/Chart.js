import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {AreaChart, Grid, BarChart, PieChart} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import Header from '../../Components/Header';

export default class Chart extends Component {
  state = {
    data: [100, 10, -10, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
  };

  randomColor = () =>
    ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(
      0,
      7,
    );
  pieData = this.state.data
    .filter(value => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: this.randomColor(),
        onPress: () => console.log('press', index),
      },
      key: `pie-${index}`,
    }));

  render() {
    const {data} = this.state;
    return (
      <View>
        <Header />
        <Text>Area Chart</Text>
        <AreaChart
          style={{height: 200}}
          data={data}
          contentInset={{top: 30, bottom: 30}}
          curve={shape.curveNatural}
          svg={{fill: this.randomColor()}}>
          <Grid />
        </AreaChart>

        <Text>Bar Chart</Text>

        <BarChart
          style={{height: 200}}
          data={data}
          svg={{fill: this.randomColor()}}
          contentInset={{top: 30, bottom: 30}}>
          <Grid />
        </BarChart>
        <Text>Pie Chart</Text>
        <PieChart style={{height: 200}} data={this.pieData} />
      </View>
    );
  }
}

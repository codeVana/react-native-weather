'use strict';
const APIKEY = 'f66fca4a0852d5ec13687981cffc69d2';
var React = require('react-native');
var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image
} = React;

var forecast = React.createClass({
   getInitialState: function() {
    return {
      temperature: null,
      humidity: null,
      windSpeed: null,
      icon: null,
      summary: '',
      loading: true
    }
   },
  componentWillMount: function() {
    fetch('https://api.forecast.io/forecast/' + APIKEY + '/45.523220,-122.668752')
      .then(res => res.json())
      //this.setState is our method of telling react that we changed something and it needs to re-render our application and figure out what changed
      .then(resJson => this.setState({
        temperature: resJson.currently.temperature,
        humidity: resJson.currently.humidity,
        windSpeed: resJson.currently.windSpeed,
        icon: resJson.currently.icon,
        summary: resJson.currently.summary,
        //We are officially loaded so now we set our loading flag to false
        loading: false
      }))
  },
  render: function() {
    return (
      <View style={styles.container}>
  		   <View style={[styles.center, styles.verticalCenter]}>
          <Image style={styles.image} source={{uri: 'https://raw.githubusercontent.com/browniefed/forecast/master/images/cloudy.png'}}/>
           <Text style={styles.titleText}> {this.state.summary} </Text>
  				</View>
  			 <View style={styles.center}>
            <Text style={styles.lowerText}> Temperature: {this.state.temperature}° </Text>
            <Text style={styles.lowerText}> Humidity: {this.state.humidity} </Text>
  				  <Text style={styles.lowerText}> Wind Speed: {this.state.windSpeed} </Text>
  				</View>
      </View>
  );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3AEE0C'
  },
  center: {
    flex: 1,
    alignItems: 'center'
  },
  verticalCenter: {
   justifyContent: 'center'
  },
  image: {
    width: 200,
    height: 200
  },
  titleText: {
    fontSize: 32,
    fontWeight: "300"
  },
  lowerText: {
    fontSize: 22,
    fontWeight: "100",
    marginTop: 10,
    marginBottom: 10
  }
})

AppRegistry.registerComponent('SampleApp', () => forecast);

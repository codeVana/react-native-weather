Summary
React Native enables you to build world-class application experiences on native platforms using a 
consistent developer experience based on JavaScript and React.

This example shows how to build a simple weather app with React Native.

We will use the API from Forecast.io. It is the same API that powers Forecast.io and Dark Sky for iOS 
can provide accurate short­term and long­term weather predictions to your business, application, 
or crazy idea.

Try it out:
Get an API key from forecast.io
Go to http://rnplay.org and put in the Code
See the app rendering

Extend:
  1. The App is currently hard coded to use Portland in the API call for forecast.io, try to change it 
  it to other locations.
  2. The App does not take any user input, 

Notes:

A View is analogous to using a div for building websites.

componentWillMount Invoked once, both on the client and server, immediately before 
the initial rendering occurs. If you call setState within this method, render() will see the 
updated state and will be executed only once despite the state change.

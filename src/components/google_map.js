import React, { Component } from 'react';

class GoogleMap extends Component {
  // This is a lifecycle method that gets call auto after
  // the component is rendered to the screen
  // This is how we create an embedded google map inside our document
  // We are feeding the ref system
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  // Utilizing the React ref system below 
  // to get a direct DOM reference use this.refs.map
  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;

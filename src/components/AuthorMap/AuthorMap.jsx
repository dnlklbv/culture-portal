import React from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';

export class AuthorMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      infoText: '',
      places: [],
    };

    for (let i = 0; i < props.coordinates.length; i += 1) {
      let coordinate = {latitude: props.coordinates[i].lat, longitude: props.coordinates[i].lng};
      this.state.places.push(coordinate);
    }
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBVieMvJjZ9UjvHrPo6MwNPD_NmhGM5ORE',
})(AuthorMap);

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

  onMarkerClick = (props, marker, e) =>{
    console.log(this.props);
  this.setState({
    activeMarker: marker,
    showingInfoWindow: true,
    infoText: this.props.coordinates[props.id].descr
  })};

  displayMarkers = () => {
    return this.state.places.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={this.onMarkerClick} />
    })
  }

  render() {
    return (
      <Map
        google={this.props.google}
        style={{ width: '50%', height: '50%' }}
        zoom={8}
        initialCenter={{ lat: 53.915708, lng: 27.582618 }}
      >
        {this.displayMarkers()}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          {this.state.infoText}
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBVieMvJjZ9UjvHrPo6MwNPD_NmhGM5ORE',
})(AuthorMap);

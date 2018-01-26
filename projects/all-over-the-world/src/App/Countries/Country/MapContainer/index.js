import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import './MapContainer.css';

const mapsApiKey = 'AIzaSyBfWzotxpgiO0FYOpfcbtKLaRjIQd1Kv-w';

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latlng: props.latlng
        }
    }

    render() {
        let { latlng } = this.state;
        return (
            <div className='map-wrapper'>
                <Map
                    google={this.props.google}
                    initialCenter={{
                        lat: latlng[0],
                        lng: latlng[1]
                    }}
                    zoom={3}
                    className='mappy'>
                    <Marker name={'Capital'} />
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: mapsApiKey
})(MapContainer);

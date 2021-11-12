import React from "react";
import GoogleMapReact from "google-map-react";

import { FaMapMarkerAlt } from "react-icons/fa";

type Marker = {
  lat: number;
  lng: number;
  onClick: () => void;
};

interface Props {
  center: GoogleMapReact.Coords;
  markers: Marker[];
}

function Map({ center, markers }: Props) {
  const Marker = ({ lat, lng, onClick }: Marker) => <FaMapMarkerAlt size={30} color="red" />;

  return (
    // Important! Always set the container height explicitly
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY || "" }}
      center={center}
      zoom={11}
    >
      {markers.map((marker, i) => (
        <Marker key={i} lat={marker.lat} lng={marker.lng} onClick={marker.onClick} />
      ))}
    </GoogleMapReact>
  );
}

export default Map;

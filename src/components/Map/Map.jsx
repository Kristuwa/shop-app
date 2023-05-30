import { TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapBlock } from "./Map.styled";

import { AddMarkerToClick } from "../AddMarkerToClick/AddMarkerToClick";

export const Map = ({ setPosition, position }) => {
  const positionCenter =
    position.latitude === 0
      ? [49.731, 31.085]
      : [position.latitude, position.longitude];

  return (
    <MapBlock center={positionCenter} zoom={5} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <AddMarkerToClick setPosition={setPosition} position={position} />
    </MapBlock>
  );
};

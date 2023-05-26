import { TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapBlock } from "./Map.styled";

import { AddMarkerToClick } from "../AddMarkerToClick/AddMarkerToClick";

const positionCenter = [51.505, -0.09];

export const Map = ({ setPosition, position }) => {
  return (
    <MapBlock center={positionCenter} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <AddMarkerToClick setPosition={setPosition} position={position} />
    </MapBlock>
  );
};

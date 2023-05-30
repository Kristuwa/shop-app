import { Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import { useCallback } from "react";

const myIcon = L.icon({ iconUrl: require("../../img/marker.png") });

export const AddMarkerToClick = ({ setPosition, position }) => {
  const handleClick = useCallback(
    ({ latlng: { lat, lng } }) => {
      setPosition({
        latitude: lat,
        longitude: lng,
      });
    },
    [setPosition]
  );

  useMapEvents({
    click: handleClick,
  });

  return position.latitude !== 0 ? (
    <Marker
      position={[position.latitude, position.longitude]}
      interactive={false}
      icon={myIcon}
    />
  ) : null;
};

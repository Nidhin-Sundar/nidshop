import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapSection = () => {
  const containerStyle = {
    width: "100%",
    height: "600px",
  };

  const center = {
    lat: 8.5241,
    lng: 76.9366,
  };

  return (
    <div className="mb-12">
      <LoadScript googleMapsApiKey="AIzaSyDwvbJOtvkdev0Gb8m5COi5YohIrbmQw9E">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapSection;

import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import locationIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Create a default icon for the location marker
const createIcon = (color) => L.icon({
  iconUrl: locationIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  className: color, // Assign color class
});

// Set default location coordinates for Indore
const DEFAULT_LOCATION = [22.7196, 75.8577]; // Coordinates for Indore

const NewLocation = () => {
  const [locations, setLocations] = useState([]); // State for locations
  const [image, setImage] = useState(null); // State for image file
  const [description, setDescription] = useState(""); // State for description

  // Function to generate random locations around the default location
  const generateRandomLocations = (baseLocation, numberOfLocations) => {
    const newLocations = [];
    for (let i = 0; i < numberOfLocations; i++) {
      // Random angle in radians
      const angle = Math.random() * 2 * Math.PI;
      // Distance in meters
      const distance = 10; // 10 meters

      // Calculate new latitude and longitude
      const lat = baseLocation[0] + (distance / 111320) * Math.cos(angle); // Approximation
      const lon = baseLocation[1] + (distance / (111320 * Math.cos((baseLocation[0] * Math.PI) / 180))) * Math.sin(angle); // Approximation

      // Random color for the marker
      const color = `hsl(${Math.random() * 360}, 100%, 50%)`;

      newLocations.push({
        position: [lat, lon],
        image: URL.createObjectURL(image), // Use the image file if available
        description,
        color,
      });
    }
    return newLocations;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocations = generateRandomLocations(DEFAULT_LOCATION, 10); // Generate 10 random locations
    setLocations([...locations, ...newLocations]); // Update locations state
    setImage(null); // Reset image input
    setDescription(""); // Reset description input
  };

  return (
    <div style={{ height: "100vh" }}>
      <h1 style={{ textAlign: "center" }}>New Location</h1>
      <form onSubmit={handleSubmit} style={{ margin: "20px", textAlign: "center" }}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])} // Store selected image
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{
            width: "100%",
            height: "100px",
            marginTop: "10px",
            padding: "10px",
            backgroundColor: "black", // Set background color to black
            color: "white", // Set text color to white
            border: "1px solid white", // Optional: Add border for visibility
            borderRadius: "5px" // Optional: Add border radius for a smoother look
          }} // Style textarea
        />
        <button type="submit" style={{ marginTop: "10px", padding: "10px 20px" }}>Publish</button>
      </form>
      <MapContainer center={DEFAULT_LOCATION} zoom={13} style={{ height: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((loc, index) => (
          <Marker key={index} position={loc.position} icon={createIcon(loc.color)}>
            <Popup>
              <img src={loc.image} alt="Location" style={{ width: "100px", height: "auto" }} />
              <p>{loc.description}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default NewLocation;

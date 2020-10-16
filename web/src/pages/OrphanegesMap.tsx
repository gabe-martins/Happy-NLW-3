import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import mapMarkerImg from "../images/map-marker.svg";
import mapIcon from "../utils/mapIcon";

import "../styles/pages/orphanage-map.css";
import "leaflet/dist/leaflet.css";
import api from "../services/api";

export default function OrphanegesMap() {
  const [orphanages, setOrphanages] = useState([]);

  useEffect(() => {
    api.get("orphanages").then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Parauapebas</strong>
          <span>Pará</span>
        </footer>
      </aside>

      <Map
        center={[-6.0699177, -50.0748023]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_TOKEN_MAP}`}
        />

        <Marker icon={mapIcon} position={[-6.0699545, -50.0650225]}>
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            Lar
            <Link to="/orphanage/1">
              <FiArrowRight size={32} color="#fff" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="/create" className="create-orphanage">
        <FiPlus size={26} color="#fff" />
      </Link>
    </div>
  );
}

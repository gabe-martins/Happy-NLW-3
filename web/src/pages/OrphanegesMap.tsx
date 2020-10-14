import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

import { Map, TileLayer } from "react-leaflet";

import mapMarkerImg from "../images/map-marker.svg";

import "../styles/pages/orphanage-map.css";
import "leaflet/dist/leaflet.css";

export default function OrphanegesMap() {
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
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_TOKEN_MAP}`} />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={26} color="#fff" />
      </Link>
    </div>
  );
}

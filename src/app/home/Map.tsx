"use client";
import React from "react";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const KebabMap = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoibWFnZ2FuNTAwMCIsImEiOiJjbGk3czRyc3czb3B3M3FudGNuYWdyNzUxIn0.J2PdVti1LdATjcLU8N50Sg",
});

type Props = {};

const Map = (props: Props) => {
  return (
    <KebabMap
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "100vh",
        width: "100vw",
      }}
      center={[11.9746, 57.7089]}
    >
      <Marker
        style={{ width: 20, height: 20, backgroundColor: "coral" }}
        coordinates={[11.9746, 57.7089]}
        anchor="bottom"
      >
        <img src="/kebabi.png" alt="Marker" />
      </Marker>
      {/* <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[11.9746, 57.7089]} />
      </Layer> */}
    </KebabMap>
  );
};

export default Map;

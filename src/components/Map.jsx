import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, 2],
        scale: 1700
      }}
      style={{
        width: "100%",
        height: "100%"
      }}
    >
      <Geographies
        geography="/features.json"
        fill="#0d064d"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-1.8971, 52.4872]}
        dx={-120}
        dy={-30}
        connectorProps={{
          stroke: "#afcb0f",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#afcb0f">
          {"Currently Located"}
        </text>
      </Annotation>
      <Annotation
        subject={[-1.8971, 52.4872]}
        dx={-35}
        dy={10}
        connectorProps={{
          stroke: "#afcb0f",
          strokeWidth: 0,
          strokeLinecap: "round"
        }}
      >
        <text fontSize={10} fill="#afcb0f">
          {"Birmingham"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
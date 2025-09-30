"use client";

import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useMemo } from "react";
import { areas, Area, TourismItem } from "@/data/areas";

// Fix default icon issue in Leaflet when used with Webpack/Next.js
// We will use CircleMarker for items, so no need to set default icons here.

type MapViewProps = {
  selectedAreaId?: string;
  onSelectArea?: (areaId: string) => void;
};

const DEFAULT_CENTER: [number, number] = [-8.75, 116.78];

export default function MapView({ selectedAreaId, onSelectArea }: MapViewProps) {
  const selectedArea: Area | undefined = useMemo(
    () => areas.find((a) => a.id === selectedAreaId),
    [selectedAreaId]
  );

  const center: [number, number] = selectedArea?.center ?? DEFAULT_CENTER;
  const zoom = selectedArea ? 11 : 9;

  return (
    <div className="w-full h-full">
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Area markers */}
        {areas.map((area) => (
          <Marker
            key={area.id}
            position={area.center}
            eventHandlers={{
              click: () => onSelectArea?.(area.id),
            }}
            icon={L.divIcon({
              className: "bg-white/90 rounded-full border border-gray-300 text-gray-800 text-xs px-2 py-1 shadow",
              html: `<div>${area.name}</div>`,
              iconSize: [10, 10],
              iconAnchor: [5, 5],
            })}
          >
            <Popup>
              <div className="text-sm">
                <div className="font-semibold mb-1">{area.name}</div>
                <div>{area.items.length} places</div>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Selected area items */}
        {selectedArea?.items.map((item: TourismItem) => (
          <CircleMarker
            key={item.id}
            center={item.location ?? selectedArea.center}
            radius={7}
            pathOptions={{ color: "#2563eb", fillColor: "#3b82f6", fillOpacity: 0.7 }}
          >
            <Popup>
              <div className="text-sm">
                <div className="font-semibold">{item.name}</div>
                <div className="text-xs capitalize text-gray-600">{item.type}</div>
                {item.description ? (
                  <div className="mt-1 text-xs text-gray-700">{item.description}</div>
                ) : null}
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}


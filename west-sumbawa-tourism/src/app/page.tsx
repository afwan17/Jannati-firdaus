"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Sidebar from "@/components/Sidebar";

const MapView = dynamic(() => import("@/components/MapView"), { ssr: false });

export default function Home() {
  const [selectedAreaId, setSelectedAreaId] = useState<string | undefined>(undefined);

  return (
    <div className="w-full h-screen grid grid-rows-[auto_1fr]">
      <header className="px-4 py-3 border-b bg-white">
        <h1 className="text-xl font-semibold">West Sumbawa Tourism Map</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] h-full">
        <Sidebar selectedAreaId={selectedAreaId} onSelectArea={setSelectedAreaId} />
        <div className="h-full">
          <MapView selectedAreaId={selectedAreaId} onSelectArea={setSelectedAreaId} />
        </div>
      </div>
    </div>
  );
}

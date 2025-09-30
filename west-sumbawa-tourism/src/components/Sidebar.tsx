"use client";

import { areas, Area, TourismItem } from "@/data/areas";

type SidebarProps = {
  selectedAreaId?: string;
  onSelectArea?: (areaId: string) => void;
};

export default function Sidebar({ selectedAreaId, onSelectArea }: SidebarProps) {
  const selectedArea: Area | undefined = areas.find((a) => a.id === selectedAreaId);

  return (
    <aside className="w-full md:w-80 border-r border-gray-200 bg-white h-full overflow-y-auto">
      <div className="px-4 py-3 border-b sticky top-0 bg-white z-10">
        <h2 className="text-lg font-semibold">West Sumbawa Tourism</h2>
        <p className="text-xs text-gray-600">Click an area on the map or choose below</p>
      </div>

      <div className="p-3 space-y-2">
        {areas.map((area) => (
          <button
            key={area.id}
            onClick={() => onSelectArea?.(area.id)}
            className={`w-full text-left px-3 py-2 rounded border ${
              selectedAreaId === area.id
                ? "bg-blue-50 border-blue-300 text-blue-800"
                : "bg-white hover:bg-gray-50 border-gray-200"
            }`}
          >
            <div className="font-medium">{area.name}</div>
            <div className="text-xs text-gray-600">{area.items.length} places</div>
          </button>
        ))}
      </div>

      <div className="px-4 py-3 border-t">
        {selectedArea ? (
          <div>
            <div className="text-sm font-semibold mb-2">Places in {selectedArea.name}</div>
            <ul className="space-y-2">
              {selectedArea.items.map((item: TourismItem) => (
                <li key={item.id} className="p-2 rounded border border-gray-200">
                  <div className="text-sm font-medium">{item.name}</div>
                  <div className="text-xs capitalize text-gray-600">{item.type}</div>
                  {item.description ? (
                    <div className="text-xs text-gray-700 mt-1">{item.description}</div>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="text-sm text-gray-600">Select an area to see places.</div>
        )}
      </div>
    </aside>
  );
}


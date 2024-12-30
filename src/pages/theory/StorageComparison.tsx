interface StorageDevice {
  type: string;
  speed: string;
  capacity: string;
  cost: string;
}

const storageDevices: StorageDevice[] = [
  { type: "SSD", speed: "Very Fast", capacity: "256GB - 4TB", cost: "High" },
  { type: "HDD", speed: "Moderate", capacity: "500GB - 18TB", cost: "Low" },
  { type: "Optical Drive", speed: "Slow", capacity: "4.7GB - 50GB", cost: "Very Low" }
];

export function StorageComparison() {
  return (
<div className="overflow-x-auto">
  <table className="min-w-full bg-white rounded-lg overflow-hidden">
    <thead className="bg-slate-800 text-white">
      <tr>
        <th className="px-4 py-2">Type</th>
        <th className="px-4 py-2">Speed</th>
        <th className="px-4 py-2">Capacity</th>
        <th className="px-4 py-2">Cost</th>
      </tr>
    </thead>
    <tbody>
      {storageDevices.map(device => (
        <tr className="border-b hover:bg-slate-50">
          <td className="px-4 py-2">{device.type}</td>
          <td className="px-4 py-2">{device.speed}</td>
          <td className="px-4 py-2">{device.capacity}</td>
          <td className="px-4 py-2">{device.cost}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}

export default StorageComparison;
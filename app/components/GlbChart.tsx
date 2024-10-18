'use client'

import { useState } from "react";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the components we need from Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

export default function GlbChart() {
  const [initialVelocity, setInitialVelocity] = useState<number>(0); // v
  const [time, setTime] = useState<number>(10);                     // Total waktu
  const [positionData, setPositionData] = useState<number[]>([]);   // Data posisi (s)
  const [timeData, setTimeData] = useState<number[]>([]);           // Data waktu (t)

  const handleCalculate = () => {
    const positions: number[] = [];
    const times: number[] = [];

    for (let t = 0; t <= time; t++) {
      // Menghitung posisi berdasarkan rumus GLB
      const position = initialVelocity * t;  // s = v * t

      positions.push(position);
      times.push(t);
    }

    setPositionData(positions);
    setTimeData(times);
  };

  return (
    <div className="px-80 max-lg:px-10 max-sm:px-4 py-6">
      <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-6">
        <div>
          <h1 className="text-2xl font-bold mb-6">Grafik GLB (Gerak Lurus Beraturan)</h1>

          <div className="mb-4">
            <label className="block mb-2">Kecepatan (v) [m/s]</label>
            <input
              type="number"
              value={initialVelocity}
              onChange={(e) => setInitialVelocity(Number(e.target.value))}
              className="border p-2 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Total Waktu (t) [detik]</label>
            <input
              type="number"
              value={time}
              onChange={(e) => setTime(Number(e.target.value))}
              className="border p-2 rounded-md w-full"
            />
          </div>

          <button onClick={handleCalculate} className="bg-blue-500 text-white px-4 py-2 rounded-md">Hitung</button>
        </div>
        <div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Grafik Posisi vs Waktu</h2>
            <Line
              data={{
                labels: timeData,
                datasets: [
                  {
                    label: 'Posisi (s) [m]',
                    data: positionData,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: true,
                    tension: 0.4
                  }
                ]
              }}
              options={{
                responsive: true,
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: 'Waktu (t) [detik]'
                    }
                  },
                  y: {
                    title: {
                      display: true,
                      text: 'Posisi (s) [meter]'
                    }
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

'use client'

import { useRef, useState } from "react";

/**
 * Components
 */
import MeasurementInputs from "@/app/components/MeasurementInputs";
import MeasurementInput from "@/app/components/MeasurementInput";
import Ruler from "@/app/components/Ruler";
// import GlbCanvas from "@/app/components/GlbCanvas";
import {ResetIcon} from "@/app/components/Icon";
import SimulationView from "@/app/components/SimulationView";

export default function GlbPage () : React.ReactElement
{
  const min = -10;
  const max = 10;
  const [time, setTime] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);
  const [velocity, setVelocity] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  const handleStartAnimation = () => {
    setIsAnimating(true);

    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }

    intervalIdRef.current = setInterval(() => {
      setPosition((prevPosition) => {
        // Rumus GLB: s = s0 + v * t
        let newPosition = prevPosition + (velocity / 10);

        newPosition = Math.min(max, Math.max(min, parseFloat(newPosition.toFixed(2))));
        return newPosition;
      });
    }, 100);

    setTimeout(() => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
      setIsAnimating(false);
    }, (time * 1000));
  };

  const handleResetMeasurement = () => {
    setTime(0);
    setVelocity(0);
    setPosition(0);
  }

  return (
    <section className={"py-6 px-80 max-lg:px-10 max-sm:px-4"}>
      <div className={"mb-10"}>
        <div className="w-full h-full">
          {/* <GlbCanvas position={position} limit={max} speed={velocity} isAnimating={isAnimating} duration={time} /> */}
          <SimulationView position={position} limit={max} isAnimating={isAnimating} duration={time} speed={velocity} />
        </div>
        <div className="w-full px-[5%]">
          <Ruler min={min} max={max} />
        </div>
      </div>
      <MeasurementInputs>
        <MeasurementInput
          label="Waktu"
          value={time}
          unit="dtk"
          onChange={setTime}
          min={0}
          max={10}
        />
        <MeasurementInput
          label="Posisi"
          value={position}
          unit="m"
          onChange={setPosition}
          min={min}
          step={0.1}
          max={max}
        />
        <MeasurementInput
          label="Kecepatan"
          value={velocity}
          unit="m/s"
          onChange={setVelocity}
          min={min}
          max={max}
        />
      </MeasurementInputs>
      <div className={"flex justify-center mt-4"}>
          {!isAnimating ? (
            <span className="grid grid-flow-col gap-4">
              <button onClick={handleStartAnimation} className={"px-8 py-2 bg-blue-500 text-white text-lg uppercase font-semibold rounded-xl hover:shadow-lg transition"}> Mulai </button>
              <button onClick={handleResetMeasurement}> <ResetIcon width={20} height={20} /> </button>
            </span>
          ) : ''}
      </div>
    </section>
  );
}

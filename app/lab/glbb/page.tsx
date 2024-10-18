'use client'

import { useState, useRef } from "react";


/**
 * Components
 */
import SimulationView from "@/app/components/SimulationView";
import MeasurementInputs from "@/app/components/MeasurementInputs";
import MeasurementInput from "@/app/components/MeasurementInput";
import { ResetIcon } from "@/app/components/Icon";
import Ruler from "@/app/components/Ruler";

export default function GlbbPage () : React.ReactElement
{
  const min : number = -10;
  const max : number = 10;
  const [time, setTime] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);
  const [velocity, setVelocity] = useState<number>(0);
  const [acceleration, setAcceleration] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
  const elapsedTimeRef = useRef<number>(0);

  const handleStartAnimation = () => {
    setIsAnimating(true);
    const startV = velocity;

    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }

    intervalIdRef.current = setInterval(() => {
      elapsedTimeRef.current += parseFloat(0.1.toFixed(2));

      // Mengupdate kecepatan dengan rumus GLBB: v = v0 + a * t
      setVelocity(parseFloat((startV + acceleration * elapsedTimeRef.current).toFixed(2)));

      // Mengupdate posisi dengan rumus GLBB: s = s0 + v0 * t + 0.5 * a * t^2
      setPosition((prevPosition) => {
        const currentVelocity = startV + acceleration * elapsedTimeRef.current;
        let newPosition = prevPosition <= 10 || prevPosition >= -10 ? prevPosition + (currentVelocity * 0.1) + (0.5 * acceleration * Math.pow(0.1, 2)) : prevPosition; //

        newPosition = Math.min(max, Math.max(min, parseFloat(newPosition.toFixed(2))));
        return newPosition;
      });
    }, 100);

    setTimeout(() => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
        elapsedTimeRef.current = 0;
      }
      setIsAnimating(false);
    }, (time * 1000));
  };

  const handleResetMeasurement = () => {
    setTime(0);
    setVelocity(0);
    setPosition(0);
    setAcceleration(0);
    elapsedTimeRef.current = 0;
  }

  return (
    <section className={"px-80 max-lg:px-10 max-sm:px-4 py-6"}>
      <div className={"mb-10"}>
      <div className="w-full h-full">
          <SimulationView position={position} limit={max} isAnimating={isAnimating} duration={time} speed={velocity} />
        </div>
        <div className="w-full px-[5%]">
          <Ruler min={min} max={max} />
        </div>
      </div>
      <MeasurementInputs elClass="grid-cols-4">
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
        <MeasurementInput
          label="Percepatan"
          value={acceleration}
          unit="m/s²"
          onChange={setAcceleration}
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

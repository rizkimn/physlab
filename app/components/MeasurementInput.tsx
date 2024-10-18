'use client'

import { ChangeEvent } from "react";


/**
 * Intefaces
 */
interface MeasurementInputParams {
  label: string;
  value: number;
  unit: string,
  onChange: (value: number) => void;
  min: number;
  step?: number;
  max: number;
}

export default function MeasurementInput ({
  label,
  value,
  unit,
  onChange,
  min,
  max,
  step=1,
} : MeasurementInputParams) : React.ReactElement
{
  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value === '' || Number(e.target.value) > max || Number(e.target.value) < min ? 0 : Number(e.target.value);
    onChange(newValue);
  };

  return (
    <div className={"flex flex-col items-center p-4"}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        name={`${label}_slider`}
        id={`${label}_slider`}
        value={value}
        onChange={handleSliderChange}
        className={"w-full"}
      />
      <div className={"flex items-center my-6"}>
        <input
          type="number"
          min={min}
          max={max}
          name={`${label}_number`}
          id={`${label}_number`}
          onChange={handleInputChange}
          value={value}
          className="border border-black p-2 rounded-xl w-16"
        />
        <h4 className={"ml-2 text-lg font-semibold"}>{unit}</h4>
      </div>
      <label
        htmlFor={`${label}_number`}
        className={"text-xl font-semibold"}
      >
        {label}
      </label>
    </div>
  );
}

'use client'

import React, { useRef, useEffect } from 'react';
import personStay from "@assets/img/object_stay.png";
import personForward from "@assets/img/object_forward.png";
import personBackward from "@assets/img/object_backward.png";
import roadImage from "@assets/img/ROAD_WITH_BACKGROUND.png"; // Tambahkan gambar jalan

interface SimulationViewProps {
  position: number,
  limit: number,
  duration: number,
  speed: number,
  isAnimating: boolean,
}

export default function SimulationView({position = 0, limit = 10, duration, speed, isAnimating} : SimulationViewProps): React.ReactElement {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Set canvas dimensions
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        // Load road image
        const roadImg = new Image();
        roadImg.src = roadImage.src; // Path to road image
        roadImg.onload = () => {
          // Calculate the position for road at the bottom
          const roadWidth = roadImg.width / 1.5;
          const roadHeight = roadImg.height / 1.6;
          const roadXPos = (canvasWidth - roadWidth) / 2; // Center horizontally
          const roadYPos = canvasHeight - roadHeight; // Align to bottom

          // Load person image
          const personImg = new Image();
          personImg.src = isAnimating && duration !== 0 ? speed > 0 ? personForward.src : personBackward.src : personStay.src;

          // Draw road image at the bottom of canvas

          personImg.onload = () => {
            // Calculate the position to center the person image
            const personWidth = personImg.width / 1;
            const personHeight = personImg.height / 1;
            //const roadHeight = roadImage.height;
            //const xPos = (canvasWidth - personWidth) / 2; // Center horizontally
            const yPos = (canvasHeight - personHeight - (26)); // Center vertically

            // Draw the person image at the updated position
            const meter = (canvasWidth - 100) / (limit * 2);
            const updatedPersonX = ((canvasWidth - personWidth) / 2) + (position * meter);
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(roadImg, roadXPos, roadYPos, roadWidth, roadHeight);
            ctx.drawImage(personImg, updatedPersonX, yPos, personWidth, personHeight);
          };
        };
      }
    }
  }, [position, isAnimating]);

  return (
    <div className="flex justify-center">
      <canvas
        ref={canvasRef}
        width={800}
        height={400}
        className="w-full h-full bg-[url('/assets/img/bg.png')] bg-cover bg-no-repeat rounded-xl overflow-hidden"
      ></canvas>
    </div>
  );
}

import React, { useRef, useEffect, useState } from 'react';
import personImage from "@assets/img/object_stay.png";
import roadImage from "@assets/img/road.png"; // Tambahkan gambar jalan

interface CanvasProps {
  position: number,
  limit: number,
  speed: number,
  duration: number,
  isAnimating: boolean,
}

export default function GlbCanvas({position = 0, limit = 10, speed, isAnimating, duration = 1} : CanvasProps): React.ReactElement {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [animationFrameId, setAnimationFrameId] = useState<number | null>(null);

  const animate = () => {
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
          const roadWidth = roadImg.width;
          const roadHeight = roadImg.height / 1.5;
          const roadXPos = (canvasWidth - roadWidth) / 2; // Center horizontally
          const roadYPos = canvasHeight - roadHeight; // Align to bottom

          // Draw road image at the bottom of canvas
          ctx.clearRect(0, 0, canvasWidth, canvasHeight);
          ctx.drawImage(roadImg, roadXPos, roadYPos, roadWidth, roadHeight);

          // Load person image
          const personImg = new Image();
          personImg.src = personImage.src;
          personImg.onload = () => {
            // Calculate the position to center the person image
            const personWidth = personImg.width / 1;
            const personHeight = personImg.height / 1;
            const roadHeight = roadImage.height;
            //const xPos = (canvasWidth - personWidth) / 2; // Center horizontally
            const yPos = (canvasHeight - personHeight - (roadHeight / 2)); // Center vertically

            // Draw the person image at the updated position
            const meter = (canvasWidth - 100) / (limit * 2);
            let updatedPersonX = ((canvasWidth - personWidth) / 2) + (position * meter); // You can adjust the position based on input
            ctx.drawImage(personImg, updatedPersonX, yPos, personWidth, personHeight);

            // Animate the person image
            const updatePosition = () => {
              ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Clear the canvas
              ctx.drawImage(roadImg, roadXPos, roadYPos, roadWidth, roadHeight);

              // const moveSpeed = updatedPersonX >= meter * 10 ? 0 : (speed / 2.6)
              updatedPersonX += speed / 2.6; // You can adjust the
              ctx.drawImage(personImg, updatedPersonX, yPos, personWidth, personHeight);

              setAnimationFrameId(requestAnimationFrame(updatePosition));
            };

            if (isAnimating) {
              updatePosition();

              setTimeout(() => {
                if (animationFrameId) {
                  cancelAnimationFrame(animationFrameId); // Hentikan animasi
                }
                speed = 0;
              }, duration * 1000);
            } else {
              if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
              }
            }
          };
        };
      }
    }
  }

  useEffect(() => {
    animate();
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
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

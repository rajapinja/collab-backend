import React, { useRef, useEffect } from 'react';



const CanvasAnimation = () => {
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);
  const ballRef = useRef({ x: 0, y: 0, speed: 0.005, t: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const drawScreen = () => {
      const { width, height } = canvas;
      const { x: p0x, y: p0y } = p0;
      const { x: p1x, y: p1y } = p1;
      const { x: p2x, y: p2y } = p2;
      const { x: p3x, y: p3y } = p3;
      const { t, speed } = ballRef.current;

      context.fillStyle = '#EEEEEE';
      context.fillRect(0, 0, width, height);
      context.strokeStyle = '#000000';
      context.strokeRect(1, 1, width - 2, height - 2);

      const cx = 3 * (p1x - p0x);
      const bx = 3 * (p2x - p1x) - cx;
      const ax = p3x - p0x - cx - bx;

      const cy = 3 * (p1y - p0y);
      const by = 3 * (p2y - p1y) - cy;
      const ay = p3y - p0y - cy - by;

      const xt = ax * (t ** 3) + bx * (t ** 2) + cx * t + p0x;
      const yt = ay * (t ** 3) + by * (t ** 2) + cy * t + p0y;

      ballRef.current.t += speed;
      if (ballRef.current.t > 1) {
        ballRef.current.t = 0;
      }

      // Draw points to illustrate path
      pointsRef.current.push({ x: xt, y: yt });
      context.fillStyle = '#000000';
      pointsRef.current.forEach(({ x, y }) => {
        context.beginPath();
        context.arc(x, y, 1, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
      });

      // Draw circle moving
      context.fillStyle = '#FF0000';
      context.beginPath();
      context.arc(xt, yt, 5, 0, Math.PI * 2, true);
      context.closePath();
      context.fill();
    };

    const intervalId = setInterval(drawScreen, 33);

    return () => clearInterval(intervalId);
  }, []);

  const p0 = { x: 60, y: 10 };
  const p1 = { x: 150, y: 150 };
  const p2 = { x: 330, y: 175 };
  const p3 = { x: 450, y: 10 };

  return (
    <div style={{ position: 'absolute', top: '250px', left: '150px' }}>
      <canvas ref={canvasRef} id="canvasOne" width="750" height="500">
        Your browser does not support HTML5 Canvas.
      </canvas>
    </div>
  );
};

export default CanvasAnimation;

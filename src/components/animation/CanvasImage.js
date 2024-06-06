import React, { useEffect, useRef } from 'react';
import BullsEye from '../../images/Bullseye.png';
import PointImage from '../../images/PointTarget.png';

const CanvasImage = () => {
  const canvasRef = useRef(null);
  const bullseyeRef = useRef(null);
  const pointImageRef = useRef(null);
  const playerRef = useRef({ x: 0, y: 0, speed: 0.005, t: 0 });
  const pointsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const drawScreen = () => {
      const { width, height } = canvas;
      const { x: p0x, y: p0y } = p0;
      const { x: p1x, y: p1y } = p1;
      const { x: p2x, y: p2y } = p2;
      const { x: p3x, y: p3y } = p3;
      const { t, speed } = playerRef.current;

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

      playerRef.current.t += speed;

      if (playerRef.current.t > 1) {
        playerRef.current.t = 1;
      }

      pointsRef.current.push({ x: xt, y: yt });

      pointsRef.current.forEach(({ x, y }) => {
        context.drawImage(pointImageRef.current, x, y, 1, 1);
      });

      playerRef.current.x = xt - bullseyeRef.current.width / 2;
      playerRef.current.y = yt - bullseyeRef.current.height / 2;

      context.drawImage(bullseyeRef.current, playerRef.current.x, playerRef.current.y);
    };

    const intervalId = setInterval(drawScreen, 33);

    return () => clearInterval(intervalId);
  }, []);

  const p0 = { x: 60, y: 10 };
  const p1 = { x: 150, y: 140 };
  const p2 = { x: 350, y: 185 };
  const p3 = { x: 540, y: 20 };

  return (
    <div style={{ position: 'absolute', top: '250px', left: '150px' }}>
      <canvas ref={canvasRef} id="canvasOne" width="700" height="350">
        Your browser does not support HTML5 Canvas.
      </canvas>
      <img ref={bullseyeRef} src={BullsEye} style={{ display: 'none' }} alt="Bullseye" />
      <img ref={pointImageRef} src={PointImage} style={{ display: 'none' }} alt="PointImage" />
    </div>
  );
};

export default CanvasImage;

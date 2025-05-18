import React, { useEffect, useRef } from "react";
import styles from "./BackgroundBlob.module.css";

const BackgroundBlob = () => {
  const blobRefs = [useRef(), useRef(), useRef()];
  const mousePos = useRef({ x: 0, y: 0 });
  const blobOffsets = useRef([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  const floatPhase = useRef(0);

  // === SETTINGS ===
  const settings = {
    mouseInfluenceBase: 10,     // Base px movement from mouse for blob0, increments by index
    mouseInfluenceStep: 10,     // Added px per blob index
    floatAmplitude: 10,         // px amplitude for floating motion
    floatSpeed: 0.005,          // speed of floating animation (rad/frame)
    morphStrength: 30,          // % amount of border radius morphing from mouse
    smoothing: 1,             // easing for movement smoothing (0 < smoothing < 1)
    scale: 1.1,                 // scale of blobs when moving
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2; // range -1 to 1
      const y = (e.clientY / window.innerHeight - 0.5) * 2; // range -1 to 1
      mousePos.current = { x, y };
    };

    const animate = () => {
      floatPhase.current += settings.floatSpeed;

      blobRefs.forEach((ref, i) => {
        if (!ref.current) return;

        // Calculate floating offset
        const floatX = Math.sin(floatPhase.current + i * 1.5) * settings.floatAmplitude;
        const floatY = Math.cos(floatPhase.current + i * 1.5) * settings.floatAmplitude;

        // Calculate target position based on mouse + floating effect
        const targetX = mousePos.current.x * (settings.mouseInfluenceBase + i * settings.mouseInfluenceStep) + floatX;
        const targetY = mousePos.current.y * (settings.mouseInfluenceBase + i * settings.mouseInfluenceStep) + floatY;

        // Smoothly update offsets
        blobOffsets.current[i].x += (targetX - blobOffsets.current[i].x) * settings.smoothing;
        blobOffsets.current[i].y += (targetY - blobOffsets.current[i].y) * settings.smoothing;

        // Morph border radius for organic shape movement
        const xWarp = 50 + mousePos.current.x * settings.morphStrength;
        const yWarp = 50 + mousePos.current.y * settings.morphStrength;
        const radius = `${xWarp}% ${100 - xWarp}% ${yWarp}% ${100 - yWarp}% / ${yWarp}% ${xWarp}% ${100 - xWarp}% ${100 - yWarp}%`;

        // Apply transform and morph styles
        ref.current.style.transform = `translate(${blobOffsets.current[i].x}px, ${blobOffsets.current[i].y}px) scale(${settings.scale})`;
        ref.current.style.borderRadius = radius;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [settings.floatSpeed, settings.mouseInfluenceBase, settings.mouseInfluenceStep, settings.floatAmplitude, settings.morphStrength, settings.smoothing, settings.scale]);

  return (
    <div className={styles.container}>
      <div ref={blobRefs[0]} className={`${styles.blob} ${styles.blob1} ${styles.blobDynamic}`} />
      <div ref={blobRefs[1]} className={`${styles.blob} ${styles.blob2} ${styles.blobDynamic}`} />
      <div ref={blobRefs[2]} className={`${styles.blob} ${styles.blob3} ${styles.blobDynamic}`} />
    </div>
  );
};

export default BackgroundBlob;

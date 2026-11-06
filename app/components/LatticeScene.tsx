"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";
import { useScroll } from "motion/react";

function Lattice() {
  const group = useRef<THREE.Group>(null);
  const innerGroup = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  const { positions, linePositions } = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(2.3, 2);
    const pos = geo.attributes.position;
    const points: number[] = [];
    for (let i = 0; i < pos.count; i++) {
      points.push(pos.getX(i), pos.getY(i), pos.getZ(i));
    }
    const edgesGeo = new THREE.EdgesGeometry(geo);
    return {
      positions: new Float32Array(points),
      linePositions: edgesGeo.attributes.position.array as Float32Array,
    };
  }, []);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((state, delta) => {
    const progress = scrollYProgress.get();
    if (group.current) {
      group.current.rotation.y += delta * (0.12 + progress * 0.3);
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        mouse.current.y * 0.25,
        0.03
      );
      group.current.rotation.z = THREE.MathUtils.lerp(
        group.current.rotation.z,
        mouse.current.x * 0.15,
        0.03
      );
      const targetScale = 1 - progress * 0.35;
      group.current.scale.setScalar(
        THREE.MathUtils.lerp(group.current.scale.x, targetScale, 0.06)
      );
      group.current.position.x = THREE.MathUtils.lerp(
        group.current.position.x,
        progress * 1.1,
        0.06
      );
    }
    if (innerGroup.current) {
      innerGroup.current.rotation.y -= delta * 0.18;
      innerGroup.current.rotation.x += delta * 0.07;
    }
    state.camera.position.z = THREE.MathUtils.lerp(
      state.camera.position.z,
      7 - progress * 1.5,
      0.04
    );
  });

  return (
    <group ref={group}>
      <group ref={innerGroup}>
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
          </bufferGeometry>
          <lineBasicMaterial color="#d98f4e" transparent opacity={0.35} />
        </lineSegments>
        <points>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          </bufferGeometry>
          <pointsMaterial color="#f0c48a" size={0.045} sizeAttenuation transparent opacity={0.9} />
        </points>
      </group>
      <mesh>
        <sphereGeometry args={[1.55, 32, 32]} />
        <meshBasicMaterial color="#d98f4e" transparent opacity={0.04} />
      </mesh>
    </group>
  );
}

function randomDust() {
  const arr = new Float32Array(400 * 3);
  for (let i = 0; i < 400; i++) {
    arr[i * 3] = (Math.random() - 0.5) * 16;
    arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
    arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
  }
  return arr;
}

function Dust() {
  const ref = useRef<THREE.Points>(null);
  // Lazy useState initializer, not useMemo: React only guarantees a lazy
  // initializer runs once per instance, which is what this one-time random
  // particle layout needs — useMemo is an optimization, not a correctness tool.
  const [positions] = useState(randomDust);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#8a8275" size={0.018} sizeAttenuation transparent opacity={0.5} />
    </points>
  );
}

export default function LatticeScene() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // Client-only mount gate: WebGL must never render during SSR/prerender.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.75]}
      className="!absolute inset-0"
    >
      <Dust />
      <Lattice />
    </Canvas>
  );
}

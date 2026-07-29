import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

/* ---------------------------------------------------------------- */
/* EnergyCore — morphing icosahedron centerpiece with breathing shells */
/* ---------------------------------------------------------------- */
function EnergyCore() {
  const coreRef = useRef();
  const innerRef = useRef();
  const outerRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.08;
      coreRef.current.rotation.x = t * 0.04;
    }
    if (innerRef.current) {
      const s = 1 + Math.sin(t * 0.9) * 0.08;
      innerRef.current.scale.setScalar(s);
    }
    if (outerRef.current) {
      const s = 1.35 + Math.sin(t * 0.6 + 1.2) * 0.12;
      outerRef.current.scale.setScalar(s);
    }
  });

  return (
    <group position={[0, 0.3, -4]}>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.15, 4]} />
        <MeshDistortMaterial
          color="#0066ff"
          emissive="#0066ff"
          distort={0.45}
          speed={3}
          metalness={1}
          roughness={0.05}
          transparent
          opacity={0.2}
        />
      </mesh>
      <mesh ref={innerRef}>
        <sphereGeometry args={[0.75, 32, 32]} />
        <meshBasicMaterial color="#4f8fff" transparent opacity={0.06} wireframe />
      </mesh>
      <mesh ref={outerRef}>
        <sphereGeometry args={[1.6, 32, 32]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.05} wireframe />
      </mesh>
    </group>
  );
}

/* ---------------------------------------------------------------- */
/* OrbitalParticle — octahedron orbiting on a sine-wave path          */
/* ---------------------------------------------------------------- */
function OrbitalParticle({ radius, speed, offset, yAmplitude, color, size }) {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + offset;
    if (ref.current) {
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.z = -4 + Math.sin(t) * radius;
      ref.current.position.y = 0.3 + Math.sin(t * 1.7) * yAmplitude;
      ref.current.rotation.x = t * 1.4;
      ref.current.rotation.y = t * 0.9;
    }
  });

  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[size, 0]} />
      <MeshDistortMaterial
        color={color}
        emissive={color}
        distort={0.5}
        speed={2}
        transparent
        opacity={0.18}
      />
    </mesh>
  );
}

const orbitalConfigs = [
  { radius: 3.2, speed: 0.22, offset: 0, yAmplitude: 0.6, color: '#0066ff', size: 0.22 },
  { radius: 4.1, speed: -0.16, offset: 1.8, yAmplitude: 0.9, color: '#8b5cf6', size: 0.16 },
  { radius: 2.5, speed: 0.3, offset: 3.4, yAmplitude: 0.4, color: '#22d3ee', size: 0.19 },
  { radius: 4.8, speed: -0.12, offset: 5.1, yAmplitude: 1.1, color: '#4f8fff', size: 0.14 },
];

/* ---------------------------------------------------------------- */
/* AuroraWave — thin transparent torus rings                          */
/* ---------------------------------------------------------------- */
function AuroraWave({ position, rotationSpeed, radius, color, tube }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.z = t * rotationSpeed;
      ref.current.rotation.x = Math.PI / 2 + Math.sin(t * 0.1) * 0.2;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[radius, tube, 16, 96]} />
      <meshBasicMaterial color={color} transparent opacity={0.12} />
    </mesh>
  );
}

const auroraConfigs = [
  { position: [0, 0.3, -4], rotationSpeed: 0.05, radius: 2.4, color: '#0066ff', tube: 0.006 },
  { position: [0.6, -0.5, -6], rotationSpeed: -0.03, radius: 3.4, color: '#8b5cf6', tube: 0.008 },
  { position: [-0.8, 1.1, -8], rotationSpeed: 0.04, radius: 4.4, color: '#4f8fff', tube: 0.005 },
];

/* ---------------------------------------------------------------- */
/* StarDust — slow-rotating point cloud                                */
/* ---------------------------------------------------------------- */
function StarDust() {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(800 * 3);
    for (let i = 0; i < 800; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 26;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 26 - 4;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#bcd4ff" size={0.02} transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

/* ---------------------------------------------------------------- */
/* Full scene                                                          */
/* ---------------------------------------------------------------- */
function Scene() {
  return (
    <>
      <fog attach="fog" args={['#020c24', 6, 25]} />
      <ambientLight intensity={0.08} />
      <directionalLight position={[4, 5, 3]} color="#4f8fff" intensity={0.4} />
      <directionalLight position={[-4, -2, 2]} color="#a855f7" intensity={0.25} />
      <pointLight position={[0, 0.3, -2]} color="#0066ff" intensity={0.8} distance={10} />
      <pointLight position={[2, -1, -6]} color="#8b5cf6" intensity={0.3} distance={12} />

      <EnergyCore />
      {orbitalConfigs.map((cfg, i) => (
        <OrbitalParticle key={i} {...cfg} />
      ))}
      {auroraConfigs.map((cfg, i) => (
        <AuroraWave key={i} {...cfg} />
      ))}
      <StarDust />
    </>
  );
}

export default function SceneBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 55 }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        dpr={[1, 1.75]}
        onCreated={({ gl, scene }) => {
          gl.setClearColor(new THREE.Color('#020c24'), 1);
          scene.background = new THREE.Color('#020c24');
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

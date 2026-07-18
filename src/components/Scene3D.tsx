import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei'
import * as THREE from 'three'

function FloatingParticle({ position, speed, scale }: { position: [number, number, number]; speed: number; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 0]} />
      <MeshDistortMaterial
        color="#1a4fd4"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        transparent
        opacity={0.15}
      />
    </mesh>
  )
}

function GlowingOrb({ position, color, scale }: { position: [number, number, number]; color: string; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.3
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color={color}
        distort={0.6}
        speed={3}
        roughness={0.1}
        metalness={0.9}
        transparent
        opacity={0.12}
      />
    </mesh>
  )
}

function FloatingRing({ position, rotation, scale }: { position: [number, number, number]; rotation: [number, number, number]; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = rotation[0] + state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = rotation[1] + state.clock.elapsedTime * 0.2
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusGeometry args={[1, 0.05, 16, 100]} />
      <MeshWobbleMaterial
        color="#4f8fff"
        factor={0.3}
        speed={1}
        roughness={0.3}
        metalness={0.7}
        transparent
        opacity={0.2}
      />
    </mesh>
  )
}

function StarField() {
  const count = 500
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30
    }
    return pos
  }, [])

  const pointsRef = useRef<THREE.Points>(null!)
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#6fa8ff"
        size={0.03}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

function CentralOrb() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const glowRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2
    }
    if (glowRef.current) {
      const scale = 1.8 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      glowRef.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <group position={[0, 0, -5]}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.2, 1]} />
        <MeshDistortMaterial
          color="#0a3fff"
          distort={0.3}
          speed={2}
          roughness={0.15}
          metalness={0.95}
          transparent
          opacity={0.25}
          emissive="#0a2aff"
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh ref={glowRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#1a5fff"
          transparent
          opacity={0.04}
        />
      </mesh>
    </group>
  )
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.15} />
        <directionalLight position={[5, 5, 5]} intensity={0.3} color="#4f8fff" />
        <directionalLight position={[-5, -3, 3]} intensity={0.2} color="#8b5cf6" />
        <pointLight position={[0, 0, -3]} intensity={0.5} color="#1a4fd4" />

        <CentralOrb />
        <StarField />

        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <FloatingParticle position={[-4, 2, -3]} speed={0.7} scale={0.4} />
        </Float>
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
          <FloatingParticle position={[4.5, -1.5, -4]} speed={0.5} scale={0.3} />
        </Float>
        <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.2}>
          <FloatingParticle position={[-3, -3, -2]} speed={0.6} scale={0.25} />
        </Float>

        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
          <GlowingOrb position={[3.5, 3, -5]} color="#8b5cf6" scale={0.6} />
        </Float>
        <Float speed={1} rotationIntensity={0.3} floatIntensity={0.7}>
          <GlowingOrb position={[-5, -2, -6]} color="#0ea5e9" scale={0.5} />
        </Float>

        <FloatingRing position={[2, 1, -4]} rotation={[Math.PI / 4, 0, 0]} scale={1.2} />
        <FloatingRing position={[-3, 0.5, -5]} rotation={[0, Math.PI / 3, Math.PI / 6]} scale={0.9} />
        <FloatingRing position={[0, -2, -3]} rotation={[Math.PI / 6, Math.PI / 4, 0]} scale={0.7} />

        <fog attach="fog" args={['#020c24', 5, 20]} />
      </Canvas>
    </div>
  )
}

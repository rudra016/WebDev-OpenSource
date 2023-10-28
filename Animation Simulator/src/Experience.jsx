import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useGLTF } from "@react-three/drei";
import Model from "./Model.jsx";
import Fox from "./Fox.jsx";
import { MeshReflectorMaterial } from "@react-three/drei";
import { Stars } from "@react-three/drei";
import { Sparkles } from "@react-three/drei";
export default function Experience() {
  // const model = useGLTF('./hamburger.glb')
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls nmakeDefault />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <Sparkles count={100}
    
      scale={10}
      size={5}
  // /** Number of particles (default: 100) */
  // count?: number
  // /** Speed of particles (default: 1) */
  // speed?: number | Float32Array
  // /** Opacity of particles (default: 1) */
  // opacity?: number | Float32Array
  // /** Color of particles (default: 100) */
  // color?: THREE.ColorRepresentation | Float32Array
  // /** Size of particles (default: randomized between 0 and 1) */
  // size?: number | Float32Array
  // /** The space the particles occupy (default: 1) */
  // scale?: 
 
/>

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      {/* <mesh castShadow position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh castShadow position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh> */}
      <Model />
      <Fox/>

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={100}
      >
        <planeGeometry />
        <MeshReflectorMaterial

blur={[300, 100]}
resolution={2048}
mixBlur={1}
mixStrength={60}
roughness={1}
depthScale={1.2}
minDepthThreshold={0.4}
maxDepthThreshold={1.4}
color="#151515"
metalness={0.5}
     // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
  />
        {/* <meshStandardMaterial color="greenyellow" /> */}
      </mesh>
    </>
  );
}

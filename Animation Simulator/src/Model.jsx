import React from 'react'
import { Clone,useGLTF } from '@react-three/drei'


const Model = () => {
    const model = useGLTF('./hamburger.glb')
  return (
    <>
    
      <Clone object={model.scene} scale={0.12} position={[-1, -1, -5]} />
      <Clone object={model.scene} scale={0.08} position={[3, -1, 0]} />
      {/* <Clone object={model.scene} scale={0.35} position={[-3, -1, 0]} /> */}
    </>
  );
}

export default Model
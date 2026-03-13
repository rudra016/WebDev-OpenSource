import * as THREE from 'three';
import { useRef, useMemo } from 'react';
import React from "react"
import { useFrame } from '@react-three/fiber';
//three and FIber different color managements so being a bitch I want perfection ....
import { RigidBody, BallCollider, CuboidCollider, Physics } from '@react-three/rapier';
THREE.ColorManagement.legacyMode = false;
import { Text, Float, useGLTF } from '@react-three/drei'
import Player from './Player';

const boxGeometry = new THREE.BoxBufferGeometry(1, 1, 1);
// const floor1Material = new THREE.MeshStandardMaterial({ color: "limegreen" })
// const floor2Material = new THREE.MeshStandardMaterial({ color: "greenyellow" })
// const wallMaterial = new THREE.MeshStandardMaterial({ color: "slategrey" })
// const ObstacleMaterial = new THREE.MeshStandardMaterial({ color: "orangered" })
const floor1Material = new THREE.MeshStandardMaterial({ color: '#111111', metalness: 0, roughness: 0 })
const floor2Material = new THREE.MeshStandardMaterial({ color: '#222222', metalness: 0, roughness: 0 })
const ObstacleMaterial = new THREE.MeshStandardMaterial({ color: '#ff0000', metalness: 0, roughness: 1 })
const wallMaterial = new THREE.MeshStandardMaterial({ color: '#887777', metalness: 0, roughness: 0 })
export function Blockstart({ position = [0, 0, 0] }) {
    return <>
        <group position={position} >
            
                <Float floatIntensity={0.25} rotationIntensity={0.25}>
                    <Text
                        font="/bebas-neue-v9-latin-regular.woff"
                        scale={0.5}
                        maxWidth={0.25}
                        lineHeight={0.75}
                        textAlign="center"
                        position={[0.75, 0.65, 0]}
                        rotation-y={- 0.25}
                    >
                       Hi there!
                        <meshBasicMaterial toneMapped={false} />
                    </Text>

            
            <Text scale={0.5} position={[-0.5, 0.8, -3]} rotation={[0, Math.PI / 4 , 0]} 
            
            font="/bebas-neue-v9-latin-regular.woff"
            
            >
                    Enjoy!
                </Text>
                </Float>
            <Text scale={0.2} position={[1.9, 0.5, -1]} rotation={[0, -Math.PI / 2, 0]} font="/bebas-neue-v9-latin-regular.woff"
 >
                    Use WASD and SPACE
                </Text>
            <mesh position-y={-0.2} material={floor1Material} geometry={boxGeometry} scale={[4, 0.2, 4]} receiveShadow>

                {/* <boxGeometry args={[4, 0.2, 4]} /> */}
                {/* <meshStandardMaterial color="limegreen" /> */}
            </mesh>
        </group>
    </>
}
export function Blockend({ position = [0, 0, 0] }) {
    const prototype2 = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/korrigan-taning/model.gltf");

    prototype2.scene.children.forEach((mesh) => { mesh.castShadow = true })
    return <>
        <group position={position} >
            <Float>

                <Text scale={0.5} position={[0, 1.5, 1]}  >
                    Finish!
                </Text>

            </Float>
            <RigidBody type='fixed' restitution={0.2} friction={0}  >

                <primitive object={prototype2.scene} scale={3} />
            </RigidBody>
            <mesh position-y={-0.2} material={floor1Material} geometry={boxGeometry} scale={[4, 0.5, 4]} receiveShadow>

                {/* <boxGeometry args={[4, 0.2, 4]} /> */}
                {/* <meshStandardMaterial color="limegreen" /> */}
            </mesh>
        </group>
    </>
}
export function Blockspinner({ position = [0, 0, 0] }) {

    const [speed, setSpeed] = React.useState(() => {
        return (Math.random() + 0.2) * (Math.random() < 0.5 ? 1 : -1)
    })
    console.log(speed);
    const obstacle = useRef();
    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        // console.log(time);

        const rotation = new THREE.Quaternion();
        rotation.setFromEuler(new THREE.Euler(0, time * speed, 0));
        obstacle.current.setNextKinematicRotation(rotation)

    })
    return <>
        <group position={position} >

            <mesh position-y={-0.2} material={floor2Material} geometry={boxGeometry} scale={[4, 0.2, 4]} receiveShadow />

            {/* <boxGeometry args={[4, 0.2, 4]} /> */}
            {/* <meshStandardMaterial color="limegreen" /> */}
            <RigidBody ref={obstacle} type="kinematicPosition" position={[0, 0.2, 0]} restitution={0.2} friction={0} >

                <mesh material={ObstacleMaterial} geometry={boxGeometry} scale={[3.5, 0.2, 0.4]} castShadow receiveShadow />
            </RigidBody>
        </group>
    </>
}
export function BlockLimbo({ position = [0, 0, 0] }) {

    const [timeOffset, settimeOffset] = React.useState(() => {
        return (Math.random()) * (Math.PI * 2)
    })
    // console.log(speed);
    const obstacle = useRef();
    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        // console.log(time);

        // const rotation = new THREE.Quaternion();
        // rotation.setFromEuler(new THREE.Euler(0, time*speed, 0));
        // obstacle.current.setNextKinematicRotation(rotation)  
        obstacle.current.setNextKinematicTranslation(new THREE.Vector3(position[0], Math.abs(Math.sin(time + timeOffset)) * 1.2 + 0.2, position[2]))

    })
    return <>
        <group position={position} >

            <mesh position-y={-0.2} material={floor2Material} geometry={boxGeometry} scale={[4, 0.2, 4]} receiveShadow />

            {/* <boxGeometry args={[4, 0.2, 4]} /> */}
            {/* <meshStandardMaterial color="limegreen" /> */}
            <RigidBody ref={obstacle} type="kinematicPosition" position={[0, 0.2, 0]} restitution={0.2} friction={0} >

                <mesh material={ObstacleMaterial} geometry={boxGeometry} scale={[3.5, 0.5, 0.4]} castShadow receiveShadow />
            </RigidBody>
        </group>
    </>
}
export function BlockAxe({ position = [0, 0, 0] }) {

    const [timeOffset, settimeOffset] = React.useState(() => {
        return (Math.random()) * (Math.PI * 2)
    })
    // console.log(speed);
    const obstacle = useRef();
    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        // console.log(time);

        // const rotation = new THREE.Quaternion();
        // rotation.setFromEuler(new THREE.Euler(0, time*speed, 0));
        // obstacle.current.setNextKinematicRotation(rotation)  
        obstacle.current.setNextKinematicTranslation(new THREE.Vector3(position[0] + (Math.sin(time + timeOffset)) * 1.5, position[1] + 1, position[2]))

    })
    return <>
        <group position={position} >

            <mesh position-y={-0.2} material={floor2Material} geometry={boxGeometry} scale={[4, 0.2, 4]} receiveShadow />

            {/* <boxGeometry args={[4, 0.2, 4]} /> */}
            {/* <meshStandardMaterial color="limegreen" /> */}
            <RigidBody ref={obstacle} type="kinematicPosition" position={[0, 0.2, 0]} restitution={0.2} friction={0} >

                <mesh material={ObstacleMaterial} geometry={boxGeometry} scale={[1, 2, 0.2]} castShadow receiveShadow />
            </RigidBody>
        </group>
    </>
}

// function Bounds({ length = 1 }) {
//     return <>
//         <Physics debug>



//             <RigidBody type='fixed' restitution={0.2} friction={0}>

//                 <mesh position={[2.15, 0.75, -(length * 2) + 2]} geometry={boxGeometry} material={wallMaterial} scale={[0.3, 1.5, 4 * length]} castShadow />
//                 <mesh position={[-2.15, 0.75, -(length * 2) + 2]} geometry={boxGeometry} material={wallMaterial} scale={[0.3, 1.5, 4 * length]} receiveShadow />
//                 <mesh position={[0, 0.75, -(length * 4) + 2]} geometry={boxGeometry} material={wallMaterial} scale={[4, 1.5, 0.3]} castShadow />
//                 <CuboidCollider args={[2, 0.1, 2 * length]} position={[0, -0.2, -(length * 2) + 2]} restitution={0.2} friction={1} type="fixed" />
//                 {/* <CuboidCollider args={[5.5, 5.5, 5.5]} /> */}
//             </RigidBody>
//             {/* <CuboidCollider position={[0, -2, 0]} args={[20, 20, 20]} /> */}


//             {/* <RigidBody type='fixed' >

//                 <CuboidCollider args={[5, 2, 0.5]} position={[0, 1, 5.25]} />
//                 <CuboidCollider args={[5, 2, 0.5]} position={[0, 1, -5.25]} />
//                 <CuboidCollider args={[5, 2, 0.5]} position={[5.25, 1, 0]} rotation={[0, -Math.PI / 2, 0]} />
//                 <CuboidCollider args={[5, 2, 0.5]} position={[-5.25, 1, 0]} rotation={[0, -Math.PI / 2, 0]} />


//             </RigidBody> */}

//         </Physics>


//     </>
// }

function Bounds({ length = 1 }) {
    return <>
        <RigidBody type="fixed" restitution={0.2} friction={0}>
            <mesh
                position={[2.15, 0.75, - (length * 2) + 2]}
                geometry={boxGeometry}
                material={wallMaterial}
                scale={[0.3, 1.5, 4 * length]}
                castShadow
            />
            <mesh
                position={[- 2.15, 0.75, - (length * 2) + 2]}
                geometry={boxGeometry}
                material={wallMaterial}
                scale={[0.3, 1.5, 4 * length]}
                receiveShadow
            />
            <mesh
                position={[0, 0.75, - (length * 4) + 2]}
                geometry={boxGeometry}
                material={wallMaterial}
                scale={[4, 1.5, 0.3]}
                receiveShadow
            />
            <CuboidCollider
                type="fixed"
                args={[2, 0.1, 2 * length]}
                position={[0, -0.1, - (length * 2) + 2]}
                restitution={0.2}
                friction={1}
            />
        </RigidBody>
    </>
}


export function Level({ count = 5, types = [BlockAxe, BlockLimbo, Blockspinner] }) {

    const blocks = useMemo(() => {

        const blocks = []
        for (let i = 0; i < count; i++) {
            blocks.push(types[Math.floor(Math.random() * types.length)]);

        }
        console.log(blocks);
        return blocks;
    }, [types, count])
    return (
        <>
            {/* 
            <mesh castShadow position-x={- 2}>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>

            <mesh castShadow position-x={2} scale={1.5}>
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>

            <mesh receiveShadow position-y={- 1} rotation-x={- Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color="greenyellow" />
            </mesh> */}
            <Blockstart position={[0, 0, 0]} />
            {blocks.map((Block, index) => <Block key={index} position={[0, 0, -(index + 1) * 4]} />)}
            <Blockend position={[0, 0, -(count + 1) * 4]} />
            <Bounds length={count + 2} />
            <Player />
        </>
    )
}
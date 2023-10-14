import React from 'react'
import { useState } from 'react';

import { Physics, RigidBody, CuboidCollider } from '@react-three/rapier'
import { useKeyboardControls } from '@react-three/drei'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three';
import useGame from './Stores/useGame';

const Player = () => {
    const body = useRef();
    const [subscribekey, getkey] = useKeyboardControls();
    const [smoothCamera] = useState(new THREE.Vector3());
    const start = useGame((state) => { return state.start })
    // const start = useGame((state) => state.start)
    const end = useGame((state) => state.end)
    const blocksCount = useGame((state) => state.blocksCount)

    const restart = useGame((state) => state.restart)
    console.log(start);
    // console.log(subscribekey);
    // console.log(getkey);
    const jump = () => {
        body.current.applyImpulse({ x: 0, y: 0.5, z: 0 });


    }
    const reset = () => {
        body.current.setTranslation({ x: 0, y: 1, z: 0 })
        body.current.setLinvel({ x: 0, y: 0, z: 0 })
        body.current.setAngvel({ x: 0, y: 0, z: 0 })
    }

    useEffect(() => {
        const unsubscribeReset = useGame.subscribe(
            (state) => state.phase,
            (value) => {
                if (value === 'ready')
                    reset()
            }
        )

        const unsub = subscribekey((state) => {
            return state.jump;
        },
            (value) => {
                if (value) {
                    jump();
                }

            })
        const unsubscribeany = subscribekey(
            () => {
                //  console.log("anykeydowsn")
                start()
            }
        )

        return () => {
            unsub();
            unsubscribeany()
            unsubscribeReset()
        };
    }
    )
    useFrame((state, delta) => {

        const { forward, leftward, rightward, backward } = getkey();
        console.log(forward, leftward, rightward, backward);
        const impulse = { x: 0, y: 0, z: 0 }
        const torque = { x: 0, y: 0, z: 0 }
        const impulseStrength = 1 * delta;
        const torqueStrength = 1 * delta;
        if (forward) { impulse.z -= impulseStrength; }
        if (backward) { impulse.z += impulseStrength; }
        if (rightward) { impulse.x += impulseStrength; }
        if (leftward) { impulse.x -= impulseStrength; }

        body.current.applyImpulse(impulse);
        body.current.applyTorqueImpulse(torque);

        const bodyposition = body.current.translation();
        const cameraPosition = new THREE.Vector3();
        cameraPosition.copy(bodyposition);
        cameraPosition.z += 2.25;
        cameraPosition.y += 0.65;
        const TargetPosition = new THREE.Vector3();
        TargetPosition.copy(bodyposition)
        TargetPosition.y += 0.25;
        smoothCamera.lerp(cameraPosition, 0.1);
        state.camera.position.copy(smoothCamera)
        state.camera.lookAt(TargetPosition)
        // console.log(bodyposition)


        if (bodyposition.z < - (blocksCount * 4 + 2)) {
            end();
            console.log("we are at the end")
        }



        if (bodyposition.y < - 4) {
            console.log("we fell down bitch")
            restart();
        }
    }
    )



    return (
        <>
            <RigidBody

                ref={body}

                colliders="ball"
                restitution={0.2}
                friction={1}
                linearDamping={0.5}
                angularDamping={0.5}
                position={[0, 1, 0]}
            >
                <mesh castShadow>
                    <icosahedronGeometry args={[0.3, 1]} />
                    <meshStandardMaterial flatShading color="mediumpurple" />
                </mesh>
            </RigidBody>
        </>
    )
}

export default Player
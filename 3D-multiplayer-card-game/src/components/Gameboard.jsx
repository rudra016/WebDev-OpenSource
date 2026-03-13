import {
  AccumulativeShadows,
  Gltf,
  RandomizedLight,
  useGLTF,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useMemo } from "react";
import { degToRad } from "three/src/math/MathUtils";
import { useGameEngine } from "../hooks/useGameEngine";
import { Card } from "./Card";
import { Player } from "./Player";

export const Gameboard = () => {
  const viewport = useThree((state) => state.viewport);
  const scalingRatio = Math.min(1, viewport.width / 12);

  const { deck, gems, players, phase, getCard } = useGameEngine();

  const shadows = useMemo(
    () => (
      <AccumulativeShadows
        temporal
        frames={35}
        alphaTest={0.75}
        scale={100}
        position={[0, 0.01, 0]}
        color="#EFBD4E"
      >
        <RandomizedLight
          amount={4}
          radius={9}
          intensity={0.55}
          ambient={0.25}
          position={[30, 5, -10]}
        />
        <RandomizedLight
          amount={4}
          radius={5}
          intensity={0.25}
          ambient={0.55}
          position={[-30, 5, -9]}
        />
      </AccumulativeShadows>
    ),
    []
  );

  return (
    <group scale={scalingRatio}>
      {/* BG */}
      <Gltf
        castShadow
        src="/models/Gameboard.glb"
        scale={0.8}
        position-x={-1}
        position-z={5}
      />
      {shadows}

      {/* DECK */}
      <group position-x={4} position-z={-2}>
        {deck.map((_, index) => (
          <motion.group
            key={index}
            position-y={index * 0.015}
            rotation-y={index % 2 ? degToRad(2) : 0}
            animate={
              phase === "playerAction" && index === deck.length - 1
                ? "selected"
                : ""
            }
            variants={{
              selected: {
                x: -2,
                y: 1.5,
                z: -2,
                rotateY: degToRad(120),
                scale: 1.5,
              },
            }}
          >
            <motion.group
              rotation-x={degToRad(90)}
              variants={{
                selected: {
                  rotateX: degToRad(-45),
                },
              }}
            >
              <Card type={getCard() || undefined} />
            </motion.group>
          </motion.group>
        ))}
      </group>
      {/* TREASURE */}
      {[...Array(gems)].map((_, index) => (
        <Gltf
          key={index}
          src="/models/UI_Gem_Blue.gltf"
          position-x={index * 0.5}
          position-y={0.25}
          scale={0.5}
        />
      ))}
      {/* CHARACTERS */}
      {players.map((player, index) => (
        <group key={player.id}>
          <Player index={index} player={player} />
        </group>
      ))}
    </group>
  );
};

useGLTF.preload("/models/Gameboard.glb");
useGLTF.preload("/models/UI_Gem_Blue.gltf");

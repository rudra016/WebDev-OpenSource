import { OrbitControls } from '@react-three/drei'
import Lights from './Lights.js';
import { Level, Blockspinner } from "./Level.js";
import { Physics, Debug } from "@react-three/rapier";
import useGame from './Stores/useGame.js';
import Effects from './Effects.js';
export default function Experience() {
    // that callback funciton is a " selector function"
    const blockCount = useGame((state) => { return state.blocksCount })
    console.log(blockCount)
    return <>
        <color args={['#2E4053']} attach='background' />
        <OrbitControls makeDefault />
        <Physics >

            <Lights />
            <Level count={blockCount} />
        </Physics>
        <Effects />


    </>
}
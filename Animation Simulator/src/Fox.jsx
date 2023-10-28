import React,{useEffect} from 'react'
import {useGLTF,useAnimations} from '@react-three/drei'
import {useControls} from 'leva'


const Fox = () => {

    const model = useGLTF('./Fox/glTF/Fox.gltf')
    const animation = useAnimations(model.animations,model.scene)
    console.log(animation)
    console.log(model)
    const {animationName} = useControls({
        animationName : {options:animation.names}
    })
    useEffect(()=>{
        const action =animation.actions[animationName];
        action.reset().fadeIn(0.5).play();
        console.log(animationName)
        return ()=>{
            action.fadeOut(0.5).play();
        }
        // setTimeout(()=>{
        //   animation.actions.Walk.play();
        //   animation.actions.Walk.crossFadeFrom(animation.actions.Run,1);
        // },2000)
    },[animationName])
  return (
    <primitive object={model.scene} scale={0.03}  position-y={-1} castShadow  />
  )
}

export default Fox
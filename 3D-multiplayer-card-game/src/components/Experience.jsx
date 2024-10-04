import { Environment, OrbitControls } from "@react-three/drei";
import { isStreamScreen } from "playroomkit";
import { degToRad } from "three/src/math/MathUtils";
import { Gameboard } from "./Gameboard";
import { MobileController } from "./MobileController";

export const Experience = () => {
  return (
    <>
      {isStreamScreen() && <OrbitControls maxPolarAngle={degToRad(80)} />}
      {isStreamScreen() ? <Gameboard /> : <MobileController />}
      <Environment preset="dawn" background blur={2} />
    </>
  );
};

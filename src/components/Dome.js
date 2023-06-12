import * as THREE from "three";
import { Html } from "@react-three/drei";
import { Popconfirm } from "antd";
import CTA from "./CTA.js";

const Dome = ({ label, destination, texture, position  }) => {
  return (
    <group>
      <mesh rotation-y={1.5}>
        <sphereGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>
      <mesh position={position}>
        <Html center>
          <Popconfirm
            title="Are you sure you want to leave?"
            onConfirm={console.log("hello")}
            okText="Yes"
            cancelText="No"
          >
            <CTA
              label={label}
              destination={destination}
              style={{
                bulma: "button is-normal is-rounded is-light is-link my-6 ",
              }}
            />
          </Popconfirm>
        </Html>
      </mesh>
    </group>
  );
};

export default Dome;

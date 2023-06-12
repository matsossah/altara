import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import Dome from "./Dome.js"

const  Portal = (props) => {
    const map = useLoader(THREE.TextureLoader, props.url) // prettier-ignore
    return <Dome label={props.label} destination={props.destination} texture={map} position={props.position}  />
  }

  export default Portal
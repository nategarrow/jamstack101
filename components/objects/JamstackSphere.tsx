
import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Icosphere_1: THREE.Mesh;
    Icosphere_2: THREE.Mesh;
  };
  materials: {
    sphere: THREE.MeshStandardMaterial;
    logo: THREE.MeshStandardMaterial;
  };
};


export function JamstackSphere(props: JSX.IntrinsicElements["group"]) {
  const sphere = useRef<any>(null)
  const { nodes, materials } = useGLTF("/assets/objects/jamstack-sphere.gltf") as GLTFResult;
  useFrame((state, delta) => {
    sphere.current.rotation.y += .001
  })

  return (
    <group name="Icosphere" rotation={[0, 0, Math.PI / 8]} scale={.95}>
      <mesh
        name="sphere"
        castShadow
        receiveShadow
        geometry={nodes.Icosphere_1.geometry}
        material={materials.sphere}
      />
      <mesh
        name="logos"
        ref={sphere}
        castShadow
        receiveShadow
        geometry={nodes.Icosphere_2.geometry}
        material={materials.logo}
      />
    </group>
  );
}

useGLTF.preload("/assets/objects/jamstack-sphere.gltf");
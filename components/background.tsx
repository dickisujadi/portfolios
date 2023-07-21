import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";
import { BufferGeometry, Material, Mesh, NormalBufferAttributes } from "three";

const icosahedronColor = "#393939";
const starsColor = "#4C7069";

const Icosahedron = () => (
  <mesh rotation-x={0.9}>
    <icosahedronGeometry args={[3, 0]} />
    <meshBasicMaterial wireframe color={icosahedronColor} />
  </mesh>
);

const Star = ({ p }: { p: number }) => {
  const ref =
    useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[]>>(
      null
    );

  useLayoutEffect(() => {
    const distance = mix(5, 3, Math.random());
    const yAngle = mix(
      degreesToRadians(80),
      degreesToRadians(90),
      Math.random()
    );
    const xAngle = degreesToRadians(360) * p;
    ref.current!.position.setFromSphericalCoords(distance, yAngle, xAngle);
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.03, 0.03, 0.03]} />
      <meshBasicMaterial wireframe color={starsColor} />
    </mesh>
  );
};

function Scene({ numStars = 9 }) {
  const gl = useThree((state) => state.gl);
  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(
    scrollYProgress,
    [0, 1],
    [1, degreesToRadians(180)]
  );
  const distance = useTransform(scrollYProgress, [0, 1], [7, 1]);
  const time = useTime();

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(
      distance.get(),
      yAngle.get(),
      time.get() * 0.00007
    );
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

  useLayoutEffect(() => gl.setPixelRatio(0.3));

  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<Star p={progress(0, numStars, i)} key={`stars-${i}`} />);
  }

  return (
    <>
      <Icosahedron />
      {stars}
    </>
  );
}

export default function Background() {
  return (
    <div className="inset-0 fixed -z-50">
      <Canvas gl={{ antialias: false }}>
        <Scene />
      </Canvas>
    </div>
  );
}

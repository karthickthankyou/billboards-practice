import {
  Box,
  GradientTexture,
  OrbitControls,
  PerspectiveCamera,
  Plane,
  useVideoTexture,
  Text,
} from '@react-three/drei'

import React, { ReactNode, Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { Button } from '@billboards-org/ui/src/components/atoms/Button'

const createGradientTexture = (a: number, b: number, offset: number) => {
  const canvas = document.createElement('canvas')
  canvas.width = 2
  canvas.height = 2

  const ctx = canvas.getContext('2d')
  const gradient = ctx?.createLinearGradient(0, 0, 0, 2)
  gradient?.addColorStop(0, `hsl(0, 0%, ${b - offset}%)`)
  gradient?.addColorStop(1, `hsl(0, 0%, ${a - offset}%)`)

  ctx?.fillRect(0, 0, 2, 2)

  const texture = new THREE.CanvasTexture(canvas)
  texture.magFilter = THREE.LinearFilter
  texture.minFilter = THREE.LinearMipMapLinearFilter

  return texture
}
function setVideoTextureUVs(
  geometry: { faceVertexUvs: THREE.Vector2[][][]; uvsNeedUpdate: boolean },
  videoTexture: { image: { videoWidth: any; videoHeight: any } },
) {
  const width = videoTexture.image.videoWidth
  const height = videoTexture.image.videoHeight

  if (!width || !height) return

  const aspectRatio = width / height
  const scaleX = aspectRatio > 1 ? 1 : aspectRatio
  const scaleY = aspectRatio > 1 ? 1 / aspectRatio : 1

  geometry.faceVertexUvs[0] = [
    [
      new THREE.Vector2(0, scaleY),
      new THREE.Vector2(scaleX, scaleY),
      new THREE.Vector2(0, 0),
    ],
    [
      new THREE.Vector2(scaleX, scaleY),
      new THREE.Vector2(scaleX, 0),
      new THREE.Vector2(0, 0),
    ],
  ]

  geometry.uvsNeedUpdate = true
}

const MovingIntoTheCityCamera = ({ speed = 0.002 }) => {
  const [x, setX] = useState(-20)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>()

  useFrame(() => {
    if (cameraRef?.current?.position) {
      setX((prevX) => {
        if (prevX >= 20) {
          return -20
        }
        return prevX + speed
      })

      cameraRef.current.position.x = x
      cameraRef.current.position.y = 5
      cameraRef.current.position.z = 0
    }
  })

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      fov={40}
      near={0.1}
      far={1000}
      rotation={[0, 30, 0]}
      position={[-20, 0, 0]}
    />
  )
}

export const MovingTopDownCamera = ({ speed = 0.002 }) => {
  const [x, setX] = useState(20)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>()

  useFrame(() => {
    if (cameraRef?.current?.position) {
      setX((prevX) => {
        if (prevX >= 20) {
          return -20
        }
        return prevX + speed
      })

      cameraRef.current.position.x = x
      cameraRef.current.position.y = 5
      cameraRef.current.position.z = 0
      cameraRef.current.rotation.x = 90
    }
  })

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      fov={40}
      near={0.1}
      far={1000}
      position={[-20, 0, 0]}
    />
  )
}

export const MovingAroundCityCamera = ({ speed = 0.002 }) => {
  const [x, setX] = useState(-20)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>()

  useFrame(() => {
    if (cameraRef?.current?.position) {
      setX((prevX) => {
        if (prevX >= 20) {
          return -20
        }
        return prevX + speed
      })

      cameraRef.current.position.x = x
      cameraRef.current.position.y = 5
      cameraRef.current.position.z = -30
      cameraRef.current.lookAt(x, 0, 0) // Slightly look down
    }
  })

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      fov={30}
      near={0.1}
      far={1000}
      position={[-20, 4, -30]}
    />
  )
}

function VideoMaterial({ url }: { url: string }) {
  const texture = useVideoTexture(url, { crossOrigin: 'Anonymous' })
  const geometryRef = useRef()

  return (
    <meshBasicMaterial
      map={texture}
      toneMapped={false}
      onUpdate={() => {
        if (
          geometryRef.current &&
          texture.image.videoWidth &&
          texture.image.videoHeight
        ) {
          setVideoTextureUVs(geometryRef.current, texture)
        }
      }}
    />
  )
}

type Plane = {
  rotation: [number, number, number]
  position: [number, number, number]
  colors: string[]
  side: string
}

const GradientCube = ({
  height = 1,
  position = [0, 0, 0],
}: {
  height: number
  position: [number, number, number]
}) => {
  const stops = [0, 1]
  const [x, y, z] = position
  const color = height * 10
  const getColors = (offset: number) => [
    `hsl(0, 0%, ${color - offset}%)`,
    `hsl(0, 0%, 0%)`,
  ]
  const planes: Plane[] = [
    {
      rotation: [0, 0, 0],
      position: [0, 0, 0.4],
      colors: getColors(0),
      side: 'front',
    }, // Front
    {
      rotation: [0, -Math.PI / 2, 0],
      position: [-0.4, 0, 0],
      colors: getColors(10),
      side: 'left',
    }, // Left
    {
      rotation: [0, Math.PI / 2, 0],
      position: [0.4, 0, 0],
      colors: getColors(20),
      side: 'right',
    }, // Right
    {
      rotation: [0, Math.PI, 0],
      position: [0, 0, -0.4],
      colors: getColors(30),
      side: 'back',
    }, // Back
    {
      rotation: [-Math.PI / 2, 0, 0],
      position: [0, 0.4, 0],
      colors: [`hsl(0, 0%, ${color}%)`, `hsl(0, 0%, ${color}%)`],
      side: 'top',
    }, // Top
  ]

  const videoRef = useRef<HTMLVideoElement>(null)
  const textureRef = useRef<THREE.VideoTexture>()

  useEffect(() => {
    if (videoRef.current) {
      textureRef.current = new THREE.VideoTexture(videoRef.current)
      textureRef.current.wrapS = textureRef.current.wrapT = 1000 // set the wrap mode to repeat
      textureRef.current.needsUpdate = true // update the texture when the video is played
      videoRef.current.play()
    }
  }, [])

  return (
    <>
      {' '}
      <group position={[x, y + height / 2, z]} scale={[1, height, 1]}>
        {planes.map(({ rotation, colors, position, side }, index) => (
          <Plane
            key={index}
            args={[0.8, 0.8]}
            rotation={rotation}
            position={position}
          >
            {getRandomInt(1, 10) === 5 && side !== 'top' ? (
              <VideoMaterial url={'ad2.mp4'} />
            ) : (
              <meshBasicMaterial>
                <GradientTexture stops={stops} colors={colors} />
              </meshBasicMaterial>
            )}
          </Plane>
        ))}
      </group>
    </>
  )
}

const randomNum = () => Math.floor(Math.random() * 10) + 1

const positionExists = (
  cityLayout: [number, number, number][],
  position: [number, number, number],
) => {
  return cityLayout.some(
    (existingPosition) =>
      existingPosition[0] === position[0] &&
      existingPosition[2] === position[2],
  )
}

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const generateCityLayout = ({
  count = 20,
}: {
  count?: number
}): [number, number, number][] => {
  const cityLayout = []

  while (cityLayout.length < count) {
    const x = getRandomInt(-20, 20)
    const z = getRandomInt(-20, 20)

    if (z !== 0 && x !== 0 && !positionExists(cityLayout, [x, 0, z])) {
      cityLayout.push([x, 0, z] as [number, number, number])
    }
  }

  return cityLayout
}

const RotatingCamera = ({ speed = 0.0005 }) => {
  const [angle, setAngle] = useState(0)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>()

  useFrame(() => {
    if (cameraRef.current) {
      setAngle((prevAngle) => (prevAngle + speed) % (2 * Math.PI))

      const radius = 40

      cameraRef.current.position.x = radius * Math.sin(angle)
      cameraRef.current.position.z = radius * Math.cos(angle)
      cameraRef.current.position.y = 40
      cameraRef.current.lookAt(0, 0, 0)
    }
  })

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      fov={20}
      near={0.1}
      far={1000}
      position={[40, 40, 40]}
    />
  )
}

export const MovingCamera = ({ speed = 0.02 }: { speed?: number }) => {
  const [x, setX] = useState(-20)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>()

  useFrame(() => {
    if (cameraRef.current) {
      setX((prevX) => {
        if (prevX >= 20) {
          return -20
        }
        return prevX + speed
      })
      cameraRef.current.position.x = x

      console.log(
        ' cameraRef.current.position',
        cameraRef.current.position,
        cameraRef.current.rotation,
      )
    }
  })

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      fov={40}
      near={0.1}
      far={1000}
      position={[-20, 20, 0]}
    />
  )
}

export const BillboardCity = ({
  children,
  camera = <RotatingCamera />,
  height = 'h-[calc(100vh-4rem)]',
}: {
  children: ReactNode
  camera?: JSX.Element
  height?: string
}) => {
  const cityLayout = generateCityLayout({ count: 120 })

  //
  return (
    <div className="relative ">
      <Canvas className={`${height} bg-black`}>
        <OrbitControls />
        {cityLayout.map((position, index) => (
          <GradientCube
            key={index}
            height={getRandomInt(1, 10)}
            position={position}
          />
        ))}
        {/* <MovingCamera /> */}
        {/*  */}
        {/*
      <MovingDownwardCamera/> */}
        {/* <MovingTopDownCamera /> */}
        {/* <MovingAroundCityCamera />
         */}
        <RotatingCamera />
        <Suspense fallback={null}>
          {/* <RotatingCamera /> */}
          {camera}
        </Suspense>
      </Canvas>
      <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full text-white">
        {children}
      </div>
    </div>
  )
}

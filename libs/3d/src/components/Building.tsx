import * as THREE from 'three'
import { useMemo } from 'react'
import { GradientTexture } from '@react-three/drei'

interface BuildingProps {
  position: [number, number, number]
  height: number
}

export const Building: React.FC<BuildingProps> = ({ position, height }) => {
  const topColor = useMemo(() => {
    const grayLevel = 255 * (1 - height / 2)
    return new THREE.Color(`rgb(${grayLevel}, ${grayLevel}, ${grayLevel})`)
  }, [height])

  const geometry = useMemo(() => new THREE.BoxGeometry(1, height, 1), [height])
  const material = useMemo(
    () => new THREE.MeshBasicMaterial({ color: 0xffffff, vertexColors: true }),
    [],
  )

  useMemo(() => {
    const colors = []
    for (let i = 0; i < geometry.getAttribute('position').count; i++) {
      colors.push(topColor.r, topColor.g, topColor.b)
    }
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
  }, [geometry, topColor])

  return (
    <mesh>
      <boxGeometry />
      <meshBasicMaterial>
        <GradientTexture
          stops={[0, 1]} // As many stops as you want
          colors={['aquamarine', 'hotpink']} // Colors need to match the number of stops
          size={1024} // Size is optional, default = 1024
        />
      </meshBasicMaterial>
    </mesh>
  )
}

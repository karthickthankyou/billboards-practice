import MapGl, { useMap, Map as MapProps } from 'react-map-gl'

export type ViewState = {
  latitude: number
  longitude: number
  zoom?: number
}

type MapProps = React.ComponentProps<typeof MapGl>

type IMapProps = MapProps & { heightClasses?: string }

export const Map = ({
  heightClasses = 'h-[calc(100vh-4rem)]',
  ...props
}: IMapProps) => {
  return (
    <div className={`overflow-hidden rounded shadow-inner ${heightClasses}`}>
      <MapGl
        {...props}
        projection={'globe'}
        mapStyle="mapbox://styles/iamkarthick/clebahxqe001701mo1i1adtw3"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        scrollZoom={false}
      >
        <StyleMap />
        {props.children}
      </MapGl>
    </div>
  )
}

export const StyleMap = () => {
  const { current } = useMap()

  current?.on('style.load', () => {
    current?.getMap().setFog({
      color: 'rgb(255, 255, 255)', // Lower atmosphere
      range: [1, 10],
      //   @ts-ignore
      'high-color': 'rgb(200, 200, 200)', // Upper atmosphere
      'horizon-blend': 0.05, // Atmosphere thickness (default 0.2 at low zooms)
      'space-color': 'rgb(150, 150, 150)', // Background color
      'star-intensity': 0.5, // Background star brightness (default 0.35 at low zoooms )
    })
  })
  return null
}
